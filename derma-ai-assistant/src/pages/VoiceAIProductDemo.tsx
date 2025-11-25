import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useConversation } from '@elevenlabs/react';
import {
  Phone, Mic, MicOff, PhoneOff, Loader2, Calendar, Clock, MessageSquare,
  CheckCircle, Sparkles, Headphones, TrendingUp, Users, DollarSign,
  Zap, BarChart3, ArrowRight, Play, Star, Shield, Globe, Building2
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const VoiceAIProductDemo: React.FC = () => {
  const navigate = useNavigate();
  const [isMuted, setIsMuted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const agentId = import.meta.env.VITE_ELEVENLABS_AGENT_ID;

  const conversation = useConversation({
    agentId: agentId || '',
    onConnect: () => {
      setError(null);
    },
    onDisconnect: () => {
      setIsMuted(false);
    },
    onError: (err) => {
      console.error('Voice agent error:', err);
      setError('Connection failed. Please try again.');
    },
    onMessage: (message) => {
      console.log('Message:', message);
    },
  });

  const isConnected = conversation.status === 'connected';
  const isConnecting = conversation.status === 'connecting';

  const handleConnect = async () => {
    setError(null);
    try {
      await conversation.startSession({
        agentId: agentId || '',
        connectionType: 'webrtc',
      });
    } catch (err) {
      console.error('Failed to start session:', err);
      setError('Failed to connect. Please try again.');
    }
  };

  const handleDisconnect = async () => {
    try {
      await conversation.endSession();
    } catch (err) {
      console.error('Failed to end session:', err);
    }
    setIsMuted(false);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 animate-pulse"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMS4xLjktMiAyLTJzMiAuOSAyIDItLjkgMi0yIDItMi0uOS0yLTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Top Badge */}
            <div className="flex justify-center mb-8">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-md rounded-full border border-purple-400/30">
                <Sparkles className="w-5 h-5 text-purple-300" />
                <span className="text-white font-semibold">The Future of Customer Service is Here</span>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </div>
            </div>

            {/* Main Headline */}
            <div className="text-center mb-12">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-tight">
                Your AI-Powered
                <br />
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                  Virtual Receptionist
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                Never miss a call again. Our AI Voice Agent handles appointments, answers questions, and manages your schedule
                <span className="text-purple-400 font-bold"> 24/7/365</span> — just like a human receptionist, but better.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 justify-center mb-12">
                <Button
                  onClick={() => document.getElementById('live-demo')?.scrollIntoView({ behavior: 'smooth' })}
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-6 text-xl rounded-full shadow-2xl transform transition hover:scale-105"
                >
                  <Play className="w-6 h-6 mr-2" />
                  Try Live Demo
                </Button>
                <Button
                  onClick={() => navigate('/demo-dashboard')}
                  size="lg"
                  variant="outline"
                  className="border-2 border-purple-400 text-white hover:bg-purple-400/10 px-8 py-6 text-xl rounded-full backdrop-blur-md"
                >
                  <BarChart3 className="w-6 h-6 mr-2 text-black" />
                  <span className="text-black">View Dashboard Demo</span>
                </Button>
              </div>
            </div>

            {/* Stats Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <div className="text-4xl font-bold text-purple-400 mb-2">2.8K+</div>
                <div className="text-gray-300">Active Users</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <div className="text-4xl font-bold text-pink-400 mb-2">99.9%</div>
                <div className="text-gray-300">Uptime</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <div className="text-4xl font-bold text-purple-400 mb-2">500K+</div>
                <div className="text-gray-300">Calls Handled</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <div className="text-4xl font-bold text-pink-400 mb-2">24/7</div>
                <div className="text-gray-300">Always Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Live Demo Section */}
      <div id="live-demo" className="py-20 bg-gradient-to-b from-slate-900 to-purple-950">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-5xl font-bold text-white mb-4">
                Experience It Live
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Try our AI receptionist right now. Book a fake appointment, ask questions, or test any scenario you can think of.
              </p>
            </div>

            {/* Voice Interface Card */}
            <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-xl rounded-3xl shadow-2xl p-8 md:p-12 border-2 border-purple-400/30">
              <div className="flex flex-col items-center">
                {/* Status Indicator */}
                <div className="mb-8">
                  <div className={`relative w-48 h-48 rounded-full flex items-center justify-center shadow-2xl ${
                    isConnected ? 'bg-gradient-to-br from-green-400 to-emerald-600' :
                    isConnecting ? 'bg-gradient-to-br from-yellow-400 to-orange-500' :
                    'bg-gradient-to-br from-purple-500 to-pink-600'
                  }`}>
                    {isConnecting ? (
                      <Loader2 className="w-24 h-24 text-white animate-spin" />
                    ) : isConnected ? (
                      <Headphones className="w-24 h-24 text-white" />
                    ) : (
                      <Phone className="w-24 h-24 text-white" />
                    )}
                    {isConnected && (
                      <>
                        <div className="absolute inset-0 rounded-full animate-ping bg-green-400 opacity-30"></div>
                        <div className="absolute -inset-6 rounded-full border-4 border-green-300 animate-pulse"></div>
                      </>
                    )}
                  </div>
                </div>

                {/* Status Text */}
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-white mb-3">
                    {isConnected ? '🎧 AI Receptionist Connected' : isConnecting ? '⏳ Connecting...' : '📞 Ready to Demonstrate'}
                  </h3>
                  <p className="text-lg text-gray-300 max-w-md mx-auto">
                    {isConnected ?
                      'The AI is listening. Try saying: "Id like to book an appointment for next Tuesday"' :
                      'Click below to start a live conversation with our AI receptionist'
                    }
                  </p>
                </div>

                {/* Error Message */}
                {error && (
                  <div className="w-full mb-6 p-4 bg-red-500/20 border border-red-400 rounded-lg backdrop-blur-sm">
                    <p className="text-red-200 text-center">{error}</p>
                  </div>
                )}

                {/* Control Buttons */}
                <div className="flex gap-4 flex-wrap justify-center">
                  {!isConnected && !isConnecting && (
                    <Button
                      onClick={handleConnect}
                      size="lg"
                      className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-12 py-8 text-2xl rounded-full shadow-2xl transform transition hover:scale-110"
                      disabled={!agentId}
                    >
                      <Phone className="w-8 h-8 mr-3" />
                      Start Live Demo
                    </Button>
                  )}

                  {isConnected && (
                    <>
                      <Button
                        onClick={toggleMute}
                        size="lg"
                        variant="outline"
                        className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-7 text-lg rounded-full backdrop-blur-md"
                      >
                        {isMuted ? (
                          <>
                            <MicOff className="w-6 h-6 mr-2" />
                            Unmute
                          </>
                        ) : (
                          <>
                            <Mic className="w-6 h-6 mr-2" />
                            Mute
                          </>
                        )}
                      </Button>

                      <Button
                        onClick={handleDisconnect}
                        size="lg"
                        variant="destructive"
                        className="px-8 py-7 text-lg rounded-full shadow-lg"
                      >
                        <PhoneOff className="w-6 h-6 mr-2" />
                        End Demo
                      </Button>
                    </>
                  )}
                </div>

                {/* Demo Suggestions */}
                {!isConnected && (
                  <div className="mt-8 w-full max-w-2xl">
                    <p className="text-purple-300 text-sm font-semibold mb-3">Try asking:</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div className="bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-purple-400/20">
                        <p className="text-white text-sm">"What services do you offer?"</p>
                      </div>
                      <div className="bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-purple-400/20">
                        <p className="text-white text-sm">"I need to book an appointment"</p>
                      </div>
                      <div className="bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-purple-400/20">
                        <p className="text-white text-sm">"What are your hours?"</p>
                      </div>
                      <div className="bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-purple-400/20">
                        <p className="text-white text-sm">"Can I reschedule my appointment?"</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Key Features Section */}
      <div className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-white mb-4">
                Why Businesses Love Our AI Receptionist
              </h2>
              <p className="text-xl text-gray-300">
                Everything you need to automate customer interactions and never miss an opportunity
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature Cards */}
              <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/30 backdrop-blur-md rounded-2xl p-8 border border-purple-400/30 hover:border-purple-400/60 transition-all">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6">
                  <Calendar className="w-9 h-9 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Smart Scheduling</h3>
                <p className="text-gray-300">
                  Automatically book, reschedule, and manage appointments with calendar sync and conflict detection.
                </p>
              </div>

              <div className="bg-gradient-to-br from-pink-900/30 to-pink-800/30 backdrop-blur-md rounded-2xl p-8 border border-pink-400/30 hover:border-pink-400/60 transition-all">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                  <Clock className="w-9 h-9 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">24/7 Availability</h3>
                <p className="text-gray-300">
                  Never miss a call again. Our AI works around the clock, handling calls even when you're sleeping.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/30 backdrop-blur-md rounded-2xl p-8 border border-blue-400/30 hover:border-blue-400/60 transition-all">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                  <MessageSquare className="w-9 h-9 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Natural Conversations</h3>
                <p className="text-gray-300">
                  Powered by advanced AI that understands context, intent, and speaks like a real human receptionist.
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-900/30 to-green-800/30 backdrop-blur-md rounded-2xl p-8 border border-green-400/30 hover:border-green-400/60 transition-all">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                  <BarChart3 className="w-9 h-9 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Analytics Dashboard</h3>
                <p className="text-gray-300">
                  Track every call, measure performance, and get insights to optimize your customer service.
                </p>
              </div>

              <div className="bg-gradient-to-br from-orange-900/30 to-orange-800/30 backdrop-blur-md rounded-2xl p-8 border border-orange-400/30 hover:border-orange-400/60 transition-all">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mb-6">
                  <Zap className="w-9 h-9 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Instant Setup</h3>
                <p className="text-gray-300">
                  Get started in minutes. No complex integrations, no technical knowledge required.
                </p>
              </div>

              <div className="bg-gradient-to-br from-indigo-900/30 to-indigo-800/30 backdrop-blur-md rounded-2xl p-8 border border-indigo-400/30 hover:border-indigo-400/60 transition-all">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                  <Shield className="w-9 h-9 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">HIPAA Compliant</h3>
                <p className="text-gray-300">
                  Enterprise-grade security with full HIPAA compliance for healthcare and medical practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ROI Section */}
      <div className="py-20 bg-gradient-to-b from-purple-950 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-white mb-4">
                The Numbers Speak for Themselves
              </h2>
              <p className="text-xl text-gray-300">
                See how our AI receptionist transforms businesses
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-md rounded-3xl p-10 border border-green-400/30 text-center">
                <TrendingUp className="w-16 h-16 text-green-400 mx-auto mb-4" />
                <div className="text-6xl font-black text-white mb-2">89%</div>
                <div className="text-xl text-gray-300 mb-2">Cost Reduction</div>
                <p className="text-gray-400 text-sm">vs hiring a full-time receptionist</p>
              </div>

              <div className="bg-gradient-to-br from-blue-500/20 to-indigo-500/20 backdrop-blur-md rounded-3xl p-10 border border-blue-400/30 text-center">
                <Users className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                <div className="text-6xl font-black text-white mb-2">2.5x</div>
                <div className="text-xl text-gray-300 mb-2">More Bookings</div>
                <p className="text-gray-400 text-sm">by capturing after-hours calls</p>
              </div>

              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-md rounded-3xl p-10 border border-purple-400/30 text-center">
                <Star className="w-16 h-16 text-purple-400 mx-auto mb-4" />
                <div className="text-6xl font-black text-white mb-2">4.8/5</div>
                <div className="text-xl text-gray-300 mb-2">Customer Rating</div>
                <p className="text-gray-400 text-sm">based on 500+ reviews</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Use Cases Section */}
      <div className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-white mb-4">
                Perfect for Every Industry
              </h2>
              <p className="text-xl text-gray-300">
                From healthcare to real estate, our AI adapts to your business needs
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 backdrop-blur-md rounded-2xl p-8 border border-purple-400/30">
                <Building2 className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-3">Healthcare & Medical</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>Patient appointment scheduling and reminders</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>Insurance verification and pre-visit questions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>HIPAA-compliant patient data handling</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-blue-900/40 to-indigo-900/40 backdrop-blur-md rounded-2xl p-8 border border-blue-400/30">
                <Globe className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-3">Real Estate</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>Property showing scheduling and coordination</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>Lead qualification and follow-up</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>Property information and availability</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-900/40 to-emerald-900/40 backdrop-blur-md rounded-2xl p-8 border border-green-400/30">
                <Sparkles className="w-12 h-12 text-green-400 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-3">Salons & Spas</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>Service booking and stylist assignment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>Package information and pricing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>Membership and loyalty program management</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-orange-900/40 to-red-900/40 backdrop-blur-md rounded-2xl p-8 border border-orange-400/30">
                <DollarSign className="w-12 h-12 text-orange-400 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-3">Professional Services</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>Consultation scheduling for lawyers, accountants</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>Initial client intake and screening</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>Service information and fee structures</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-br from-purple-900 via-pink-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
              Join 2,800+ businesses using our AI receptionist to automate customer service and boost revenue.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                onClick={() => navigate('/demo-dashboard')}
                size="lg"
                className="bg-white text-purple-900 hover:bg-gray-100 px-10 py-7 text-xl rounded-full shadow-2xl transform transition hover:scale-105 font-bold"
              >
                <BarChart3 className="w-6 h-6 mr-2" />
                View Live Dashboard
                <ArrowRight className="w-6 h-6 ml-2" />
              </Button>
              <Button
                onClick={() => document.getElementById('live-demo')?.scrollIntoView({ behavior: 'smooth' })}
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 px-10 py-7 text-xl rounded-full backdrop-blur-md font-bold"
              >
                <Play className=" text-black w-6 h-6 mr-2" />
                <span className="text-black">Try Another Demo</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoiceAIProductDemo;
