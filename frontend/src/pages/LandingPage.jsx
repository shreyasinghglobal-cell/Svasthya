import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import AnimalSticker from '../components/AnimalSticker';
import { ArrowRight } from 'lucide-react';

export default function LandingPage() {
  const navigate = useNavigate();
  const { currentLanguage, isCaregiverLoggedIn, isPatientLoggedIn } = useApp();

  return (
    <div className="min-h-[calc(100vh-80px)] bg-[#FFF8EF] py-8 sm:py-14 px-4 sm:px-6 lg:px-8 flex flex-col justify-between">
      <div className="max-w-5xl mx-auto w-full">
        
        {/* Cultural Welcome Tag */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-stone-100 border border-stone-300 text-stone-800 text-sm font-semibold shadow-2xs mb-4">
            <AnimalSticker animal="panda" alt="Panda sticker" size={32} className="w-8 h-8" />
            <span>{currentLanguage.greeting} • Welcome to Svasthya</span>
          </div>
          
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-stone-900 tracking-tight leading-tight sm:leading-none mb-4">
            Caring for Minds, <br className="hidden sm:inline" />
            <span className="text-amber-800">
              Preserving Memories
            </span>
          </h1>
          
          <p className="text-base sm:text-xl text-stone-600 max-w-2xl mx-auto font-normal leading-relaxed">
            A warm, voice-guided cognitive companion tailored for elderly dementia patients and caring families.
          </p>
        </div>

        {/* Core Question & Role Selection Cards */}
        <div className="mt-8 sm:mt-12">
          <div className="text-center mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              Choose Your Portal
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
            
            {/* 1. Caregiver Card */}
            <div 
              onClick={() => navigate(isCaregiverLoggedIn ? '/caregiver' : '/caregiver/login')}
              className="group relative rounded-3xl bg-white p-7 sm:p-9 border border-stone-200 hover:border-amber-800 shadow-xs hover:shadow-xl transition-all duration-200 cursor-pointer flex flex-col justify-between overflow-hidden"
            >
              <div>
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-rose-50 flex items-center justify-center shadow-md mb-6 group-hover:scale-105 transition-transform duration-200 border border-rose-100">
                  <AnimalSticker sticker="love-birds" alt="Love birds sticker representing caregivers and family" size={88} className="w-[88px] h-[88px]" />
                </div>

                <div className="inline-block px-3 py-1 rounded-full bg-stone-100 text-stone-800 text-xs font-bold uppercase tracking-wider mb-2 border border-stone-200">
                  Clinical & Family Hub
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-stone-900 group-hover:text-amber-800 transition-colors">
                  I am a Caregiver
                </h3>

                <p className="text-stone-600 text-sm sm:text-base mt-2 leading-relaxed">
                  For family members, clinicians & nursing staff. Monitor patient vitals, cognitive adherence curves, red-flag alerts, and manage reminders.
                </p>

                <div className="mt-6 space-y-2.5">
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-stone-700">
                    <span className="w-2 h-2 rounded-full bg-amber-800" />
                    <span>Missed Reminder & Score Drop Alerts</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-stone-700">
                    <span className="w-2 h-2 rounded-full bg-stone-500" />
                    <span>7-Day Cognitive Performance Analytics</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-stone-700">
                    <span className="w-2 h-2 rounded-full bg-stone-500" />
                    <span>Multi-patient registry & emergency contact sync</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-stone-100 flex items-center justify-between">
                <span className="text-sm sm:text-base font-bold text-amber-800 group-hover:underline">
                  {isCaregiverLoggedIn ? 'Open Caregiver Dashboard' : 'Caregiver Sign In'}
                </span>
                <div className="w-10 h-10 rounded-full bg-amber-800 text-white flex items-center justify-center group-hover:translate-x-1 transition-transform shadow-2xs">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </div>

            {/* 2. Patient Card */}
            <div 
              onClick={() => navigate(isPatientLoggedIn ? '/patient' : '/patient/login')}
              className="group relative rounded-3xl bg-white p-7 sm:p-9 border border-stone-200 hover:border-amber-800 shadow-xs hover:shadow-xl transition-all duration-200 cursor-pointer flex flex-col justify-between overflow-hidden"
            >
              <div>
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-amber-50 flex items-center justify-center shadow-md mb-6 group-hover:scale-105 transition-transform duration-200 border border-amber-100">
                  <AnimalSticker sticker="stay-at-home" alt="Stay-at-home sticker representing the patient home portal" size={88} className="w-[88px] h-[88px]" />
                </div>

                <div className="inline-block px-3 py-1 rounded-full bg-stone-100 text-stone-800 text-xs font-bold uppercase tracking-wider mb-2 border border-stone-200">
                  Elderly-Friendly Portal
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-stone-900 group-hover:text-amber-800 transition-colors">
                  I am a Patient
                </h3>

                <p className="text-stone-600 text-sm sm:text-base mt-2 leading-relaxed">
                  Simple, high-contrast companion for daily medicine reminders, family photos, voice greetings, and joyful brain games.
                </p>

                <div className="mt-6 space-y-2.5">
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-stone-700">
                    <span className="w-2 h-2 rounded-full bg-amber-800" />
                    <span>Large 1-Tap "Done ✓" Daily Reminders</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-stone-700">
                    <span className="w-2 h-2 rounded-full bg-stone-500" />
                    <span>Family Photo Vault with Audio Narrations</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-stone-700">
                    <span className="w-2 h-2 rounded-full bg-stone-500" />
                    <span>Featured Game of the Day & Memory Streaks</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-stone-100 flex items-center justify-between">
                <span className="text-sm sm:text-base font-bold text-amber-800 group-hover:underline">
                  {isPatientLoggedIn ? 'Go to My Daily Space' : 'Enter with Simple PIN'}
                </span>
                <div className="w-10 h-10 rounded-full bg-amber-800 text-white flex items-center justify-center group-hover:translate-x-1 transition-transform shadow-2xs">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Regional Cultural Features Ribbon */}
        <div className="mt-12 bg-white rounded-2xl p-4 sm:p-5 border border-stone-200 shadow-2xs">
          <div className="flex flex-wrap items-center justify-around gap-4 text-center">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-800" />
              <span className="text-xs sm:text-sm font-semibold text-stone-800">
                Warm Earth & Cream Tones
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-stone-600" />
              <span className="text-xs sm:text-sm font-semibold text-stone-800">
                Gentle Voice Guidance
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-stone-600" />
              <span className="text-xs sm:text-sm font-semibold text-stone-800">
                High-Contrast Elderly UI
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-stone-600" />
              <span className="text-xs sm:text-sm font-semibold text-stone-800">
                5 Regional Languages
              </span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
