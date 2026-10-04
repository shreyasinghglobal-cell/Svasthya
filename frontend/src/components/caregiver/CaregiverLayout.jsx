import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { useApp } from '../../context/AppContext';
import { getStoredCaregiverSession } from '../../utils/authUtils';
import { 
  Users, 
  Bell, 
  ShieldCheck, 
  KeyRound, 
  LogOut, 
  UserPlus, 
  HeartHandshake, 
  ChevronRight, 
  ExternalLink,
  Menu,
  X,
  Sparkles,
  Activity,
  CheckCircle2,
  AlertTriangle,
  Layers,
  Search
} from 'lucide-react';
import AnimalSticker from '../AnimalSticker';

export default function CaregiverLayout({ 
  children, 
  onOpenAddPatient, 
  onOpenSettings,
  activePatientCount = 0,
  searchTerm,
  setSearchTerm
}) {
  const navigate = useNavigate();
  const location = useLocation();
  const { caregiverUser, redFlags, logoutCaregiver, patients, activePatient, setActivePatientId, setDirectPatientSession } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const session = getStoredCaregiverSession();
    if (!session.isValid && !caregiverUser) {
      navigate('/caregiver/login', { replace: true });
    }
  }, [navigate, caregiverUser]);

  const isPatientsRoute = location.pathname === '/caregiver' || location.pathname.startsWith('/caregiver/patient');
  const isNotificationsRoute = location.pathname === '/caregiver/notifications';
  const isProfileRoute = location.pathname === '/caregiver/profile';

  return (
    <div className="min-h-screen bg-[#FFF8EF] flex flex-col md:flex-row text-[#302033] font-sans antialiased selection:bg-[#f3d6c1] selection:text-[#493546]">
      
      {/* ======================================================== */}
      {/* 1. PERSISTENT WARM CLINICAL SIDEBAR (DESKTOP)            */}
      {/* ======================================================== */}
      <aside className="hidden md:flex flex-col w-64 lg:w-72 bg-gradient-to-b from-[#F8E6E5] via-[#F6D7D9] to-[#EAD0D8] text-[#43352f] border-r border-[#E6C4CF] shrink-0 sticky top-0 h-screen z-40">
        
        {/* Sidebar Brand Header */}
        <div className="p-5 border-b border-[#E6C4CF] flex items-center justify-between">
          <Link to="/caregiver" className="flex items-center gap-3 group focus:outline-none">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#D18B76] to-[#bd6845] flex items-center justify-center text-white shadow-md shadow-[#d9bca4]/60 group-hover:scale-105 transition-transform shrink-0 border border-[#f1d9ca]">
              <AnimalSticker animal="panda" alt="Svasthya Panda logo" size={40} className="w-10 h-10" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-black tracking-tight text-[#302033] font-sans">
                  Svasthya
                </span>
                <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-[#F7E1E7] text-[#8C465E] border border-[#E4B8C1]">
                  CLINICAL
                </span>
              </div>
              <p className="text-[11px] text-[#7c5e52] font-medium">
                Care Operations Portal
              </p>
            </div>
          </Link>
        </div>

        {/* Sidebar Navigation Menu */}
        <div className="flex-1 px-3.5 py-5 space-y-6 overflow-y-auto">
          
          {/* Main Navigation Section */}
          <div className="space-y-1.5">
            <div className="px-3 pb-2 text-[11px] font-bold uppercase tracking-widest text-[#8a5b49]">
              Clinical Workspace
            </div>

            {/* Patients Directory */}
            <Link
              to="/caregiver"
              className={`flex items-center justify-between px-3.5 py-3 rounded-xl text-sm font-semibold transition-all group ${
                isPatientsRoute
                  ? 'bg-[#f3d6c1] text-[#8C465E] font-bold border border-[#E4B8C1] shadow-xs'
                  : 'text-[#493546] hover:text-[#302033] hover:bg-[#FFF2F1]'
              }`}
            >
              <div className="flex items-center gap-3">
                <Users className={`w-4.5 h-4.5 ${isPatientsRoute ? 'text-[#8C465E]' : 'text-[#826a61] group-hover:text-[#493546]'}`} />
                <span>Assigned Patients</span>
              </div>
              <span className={`text-xs px-2.5 py-0.5 rounded-full font-bold ${
                isPatientsRoute
                  ? 'bg-[#f9e9df] text-[#8C465E] border border-[#E4B8C1]'
                  : 'bg-[#f9ead6] text-[#7e604e] border border-[#e7d1b8]'
              }`}>
                {patients.length}
              </span>
            </Link>

            {/* Attention Required / Alerts */}
            <Link
              to="/caregiver/notifications"
              className={`flex items-center justify-between px-3.5 py-3 rounded-xl text-sm font-semibold transition-all group ${
                isNotificationsRoute
                  ? 'bg-[#f8d9d4] text-[#a8473a] font-bold border border-[#e5ab9a] shadow-xs'
                  : 'text-[#493546] hover:text-[#302033] hover:bg-[#FFF2F1]'
              }`}
            >
              <div className="flex items-center gap-3">
                <Bell className={`w-4.5 h-4.5 ${isNotificationsRoute ? 'text-[#a8473a]' : 'text-[#826a61] group-hover:text-[#493546]'}`} />
                <span>Attention Required</span>
              </div>
              {redFlags.length > 0 ? (
                <span className="text-xs px-2.5 py-0.5 rounded-full font-bold bg-[#f7c6bc] text-[#8e3d30] border border-[#e4a18f] animate-pulse">
                  {redFlags.length} active
                </span>
              ) : (
                <span className="text-xs px-2 py-0.5 rounded-full text-[#7e604e] bg-[#f9ead6] border border-[#e7d1b8]">
                  0
                </span>
              )}
            </Link>
          </div>

          {/* Quick Actions / Security Section */}
          <div className="space-y-1.5">
            <div className="px-3 pb-2 text-[11px] font-bold uppercase tracking-widest text-[#8a5b49]">
              Operations & Security
            </div>

            {onOpenAddPatient && (
              <button
                type="button"
                onClick={onOpenAddPatient}
                className="w-full flex items-center justify-between px-3.5 py-3 rounded-xl text-sm font-semibold text-[#493546] hover:text-[#302033] hover:bg-[#FFF2F1] transition-colors cursor-pointer text-left group"
              >
                <div className="flex items-center gap-3">
                  <UserPlus className="w-4.5 h-4.5 text-[#826a61] group-hover:text-[#8C465E]" />
                  <span>Enroll New Patient</span>
                </div>
                <span className="text-xs font-bold text-[#8C465E] bg-[#F4D8DF] px-2 py-0.5 rounded border border-[#E4B8C1]">
                  + Add
                </span>
              </button>
            )}

            {/* Caregiver Profile & Credentials */}
            <Link
              to="/caregiver/profile"
              className={`flex items-center justify-between px-3.5 py-3 rounded-xl text-sm font-semibold transition-all group ${
                isProfileRoute
                  ? 'bg-[#f3d6c1] text-[#8C465E] font-bold border border-[#E4B8C1] shadow-xs'
                  : 'text-[#493546] hover:text-[#302033] hover:bg-[#FFF2F1]'
              }`}
            >
              <div className="flex items-center gap-3">
                <ShieldCheck className={`w-4.5 h-4.5 ${isProfileRoute ? 'text-[#8C465E]' : 'text-[#826a61] group-hover:text-[#493546]'}`} />
                <span>Clinician Profile & Auth</span>
              </div>
              <span className="text-xs text-[#7e604e] group-hover:text-[#493546]">→</span>
            </Link>

            <button
              type="button"
              onClick={() => {
                const targetPatient = activePatient || (patients && patients.length > 0 ? patients[0] : null);
                if (targetPatient && setDirectPatientSession) {
                  setDirectPatientSession(targetPatient);
                }
                navigate('/patient');
              }}
              className="flex items-center justify-between w-full px-3.5 py-3 rounded-xl text-sm font-semibold text-[#493546] hover:text-[#302033] hover:bg-[#FFF2F1] transition-colors group text-left cursor-pointer"
              title="Preview the elderly-friendly patient portal experience"
            >
              <div className="flex items-center gap-3">
                <ExternalLink className="w-4.5 h-4.5 text-[#826a61] group-hover:text-[#493546]" />
                <span>Patient Portal Preview</span>
              </div>
              <span className="text-xs text-[#7e604e] group-hover:text-[#493546]">↗</span>
            </button>
          </div>

        </div>

        {/* Sidebar Footer User Card (Clickable to Profile) */}
        <div className="p-4 border-t border-[#E6C4CF] bg-[#FFF8EF]">
          <div className="flex items-center justify-between gap-3">
            <Link
              to="/caregiver/profile"
              className="flex items-center gap-3 min-w-0 flex-1 hover:opacity-90 transition-opacity cursor-pointer group"
              title="View Clinician Profile & Account Settings"
            >
              <div className="w-10 h-10 rounded-xl overflow-hidden border border-[#E4B8C1] shrink-0 shadow-xs group-hover:scale-105 transition-transform bg-[#f4dfd1] flex items-center justify-center font-bold text-[#8C465E]">
                {caregiverUser?.avatar ? (
                  <img
                    src={caregiverUser.avatar}
                    alt={caregiverUser?.name || 'Caregiver'}
                    className="w-full h-full object-cover object-top"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                ) : (
                  <span>{caregiverUser?.name?.charAt(0)?.toUpperCase() || 'C'}</span>
                )}
              </div>
              <div className="min-w-0">
                <p className="text-sm font-bold text-[#302033] truncate group-hover:text-[#8C465E] transition-colors">
                  {caregiverUser?.name || 'Dr. Ananya Sharma'}
                </p>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="text-xs font-semibold text-[#8C465E] capitalize">
                    {caregiverUser?.role || 'Clinician'}
                  </span>
                  <span className="text-[10px] text-[#7e604e] group-hover:text-[#493546]">
                    Profile →
                  </span>
                </div>
              </div>
            </Link>

            <button
              type="button"
              onClick={() => {
                logoutCaregiver();
                navigate('/');
              }}
              title="Sign Out of Caregiver Portal"
              className="p-2.5 rounded-xl bg-[#f9ead6] hover:bg-[#f1d0b0] text-[#8C465E] border border-[#E6C4CF] transition-colors cursor-pointer shrink-0"
            >
              <LogOut className="w-4.5 h-4.5" />
            </button>
          </div>
        </div>

      </aside>

      {/* ======================================================== */}
      {/* 2. MOBILE RESPONSIVE TOP NAV BAR                         */}
      {/* ======================================================== */}
      <div className="md:hidden bg-[#F8E6E5] text-[#302033] p-4 flex items-center justify-between border-b border-[#E6C4CF] sticky top-0 z-50">
        <Link to="/caregiver" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#D18B76] to-[#bd6845] flex items-center justify-center text-white shrink-0 border border-[#f1d9ca]">
            <AnimalSticker animal="panda" alt="Svasthya Panda logo" size={28} className="w-7 h-7" />
          </div>
          <span className="font-black text-lg text-[#302033] tracking-tight">Svasthya</span>
          <span className="text-[9px] font-black uppercase tracking-wider px-1.5 py-0.5 rounded bg-[#f5d7c6] text-[#8C465E] border border-[#E4B8C1]">
            CLINICAL
          </span>
        </Link>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => navigate('/caregiver/notifications')}
            className="p-2 rounded-lg bg-[#FFF2F1] text-[#493546] relative cursor-pointer border border-[#E6C4CF]"
          >
            <Bell className="w-4.5 h-4.5" />
            {redFlags.length > 0 && (
              <span className="absolute -top-1 -right-1 w-4.5 h-4.5 bg-[#c95e47] text-white text-[10px] font-bold rounded-full flex items-center justify-center shadow-xs">
                {redFlags.length}
              </span>
            )}
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-[#FFF2F1] text-[#493546] cursor-pointer border border-[#E6C4CF]"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#F8E6E5] text-[#302033] border-b border-[#E6C4CF] p-4 space-y-2.5 z-40 animate-in slide-in-from-top-2">
          <Link
            to="/caregiver"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3.5 py-2.5 rounded-xl bg-[#FFF8EF] text-[#302033] font-bold text-xs border border-[#E6C4CF]"
          >
            Assigned Patients ({patients.length})
          </Link>
          <Link
            to="/caregiver/notifications"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3.5 py-2.5 rounded-xl bg-[#FFF8EF] text-[#302033] font-bold text-xs border border-[#E6C4CF]"
          >
            Active Alerts ({redFlags.length})
          </Link>
          <Link
            to="/caregiver/profile"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3.5 py-2.5 rounded-xl bg-[#f5d7c6] text-[#8C465E] font-bold text-xs border border-[#E4B8C1]"
          >
            Clinician Profile & Security
          </Link>
          {onOpenAddPatient && (
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAddPatient();
              }}
              className="w-full text-left px-3.5 py-2.5 rounded-xl bg-[#f1c7a5] text-[#8C465E] font-bold text-xs border border-[#E4B8C1]"
            >
              + Enroll New Patient
            </button>
          )}
          <button
            type="button"
            onClick={() => {
              setMobileMenuOpen(false);
              const targetPatient = activePatient || (patients && patients.length > 0 ? patients[0] : null);
              if (targetPatient && setDirectPatientSession) {
                setDirectPatientSession(targetPatient);
              }
              navigate('/patient');
            }}
            className="w-full text-left px-3.5 py-2.5 rounded-xl bg-[#FFF2F1] hover:bg-[#f9ead6] text-[#493546] font-bold text-xs flex items-center justify-between border border-[#E6C4CF]"
          >
            <span>Patient Portal Preview</span>
            <span className="text-[#8C465E]">↗</span>
          </button>
          <button
            onClick={() => {
              logoutCaregiver();
              navigate('/');
            }}
            className="w-full text-left px-3.5 py-2.5 rounded-xl bg-rose-950/50 text-rose-300 font-bold text-xs border border-rose-800/30"
          >
            Sign Out
          </button>
        </div>
      )}

      {/* ======================================================== */}
      {/* 3. MAIN CONTENT CANVAS                                   */}
      {/* ======================================================== */}
      <div className="flex-1 flex flex-col min-w-0 overflow-x-hidden">
        
        {/* Top Clinical Header Bar */}
        <header className="bg-white border-b border-slate-200/80 px-6 sm:px-8 py-4 shrink-0 flex items-center justify-between gap-4 sticky top-0 md:static z-30 shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
          
          {/* Breadcrumb / Title Area */}
          <div className="flex items-center gap-3 min-w-0">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
              <span className="text-slate-800 font-bold">Clinical Caregiver Portal</span>
              <span>/</span>
              <span className="text-teal-800 font-bold capitalize">
                {isNotificationsRoute ? 'Attention Required Alerts' : isPatientsRoute && location.pathname.includes('/patient/') ? 'Patient Record' : 'Patient Roster Overview'}
              </span>
            </div>
          </div>

          {/* Header Action Controls */}
          <div className="flex items-center gap-3">
            {/* Search Input (Optional on List Page) */}
            {setSearchTerm && (
              <div className="relative hidden sm:block">
                <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchTerm || ''}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Filter patients by name, city..."
                  className="pl-8 pr-3 py-1.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:border-teal-600 focus:bg-white transition-all w-52"
                />
              </div>
            )}

            {/* Notification Bell Badge */}
            <button
              type="button"
              onClick={() => navigate('/caregiver/notifications')}
              className={`relative p-2 rounded-xl border transition-all cursor-pointer flex items-center justify-center ${
                redFlags.length > 0
                  ? 'bg-rose-50 hover:bg-rose-100 text-rose-800 border-rose-200'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-200'
              }`}
              title={`Attention Required (${redFlags.length} active alerts)`}
            >
              <Bell className={`w-4 h-4 ${redFlags.length > 0 ? 'text-rose-700' : 'text-slate-600'}`} />
              {redFlags.length > 0 && (
                <span className="absolute -top-1 -right-1 min-w-[1.15rem] h-4.5 px-1 rounded-full bg-rose-600 text-white text-[10px] font-black flex items-center justify-center shadow-xs border-2 border-white animate-pulse">
                  {redFlags.length}
                </span>
              )}
            </button>
          </div>

        </header>

        {/* Content Area */}
        <main className="flex-1 p-6 sm:p-8 lg:p-10 max-w-7xl w-full mx-auto space-y-8">
          {children}
        </main>

      </div>

    </div>
  );
}
