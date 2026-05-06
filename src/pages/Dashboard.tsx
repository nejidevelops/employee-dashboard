import { useState } from 'react';
import { PartyPopper, Zap, Check, Sparkles, Info, PiggyBank, ShoppingBag, Coffee, Award, Handshake, Gauge, Clock, Coins, Quote, Heart, MessageCircle, Lightbulb, ChevronDown } from 'lucide-react';

type WallFilter = 'Everyone' | 'My Circle';
type WallAudience = 'everyone' | 'circle';
type WallBadge = 'award' | 'lightbulb' | 'heart';

type WallItem = {
  id: number;
  audience: WallAudience;
  featured?: boolean;
  author: string;
  verb: string;
  target: string;
  time: string;
  tag: string;
  points: number;
  initialClaps: number;
  comments: number;
  quote?: string;
  body?: string;
  media?: {
    src: string;
    alt: string;
    label: string;
  };
  avatar: string;
  avatarAlt: string;
  badge: {
    kind: WallBadge;
    className: string;
  };
};

export default function Dashboard() {
  const wallItems: WallItem[] = [
    {
      id: 1,
      audience: 'everyone',
      featured: true,
      author: 'Sarah Jenkins',
      verb: 'celebrated',
      target: 'Michael Chen',
      time: '2 hours ago',
      tag: '#CustomerObsession',
      points: 250,
      initialClaps: 12,
      comments: 3,
      quote:
        'Michael went above and beyond to help a client during the server migration. His calm demeanor and technical expertise saved the day. Truly an inspiration to the team.',
      avatar:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuD3AEqFg2gY-D-mjY7pmozOVUZU4sqpWbPcyv7iUuQB7LDxqks8LaZRdN7-ZBuOVy_4R94iF3_GG6y6ckJxqyIEF7pDKIaSec9St4aaxEMOOURjUDAmvk5V9IcIpgSvE70SgqbDWvgiTmIPTd1eFLRiXL9W9BfAhBX1xVsJKjql_mUJUdOvdcuJBDuh-EuGcPLJYnom5_ybSIIx-xySRWG4bJwAHe1g8bYBG_nvB2vNrniZ3Z0HvinmNGL00pd-zWLrts-S4r314gA',
      avatarAlt: 'Sarah Jenkins',
      badge: {
        kind: 'award',
        className: 'bg-amber-500',
      },
    },
    {
      id: 2,
      audience: 'circle',
      author: 'David Miller',
      verb: 'shouted out',
      target: 'The UX Team',
      time: '5 hours ago',
      tag: '#Innovation',
      points: 500,
      initialClaps: 28,
      comments: 8,
      quote:
        'The new dashboard design is a game changer. The team worked tirelessly to balance data density with elegant aesthetics. Great work everyone.',
      avatar:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBR3fVPjaysof3dsmbln8E_ftFzFglZi56IoiOeVQbgAbJbN1vAvuLTY-tXbV8x_XS7G9xSYrK7R2DYDm9vDscQGJztgnY10-ZAH7DtQu2PHMOWGPEwOiiGVmkwM49SP3JIDBaE54bIS9OxBOZ4cC7JjYR_Og5aGfuLQdB_YA8wtN8yo1PnXqRB8RJsv_Qmcr6-khgFqWYUy5R8av9xjCG5YHKMtRoGIJb9BzH8Z-KXbBb39Vq58SNLbBHa-UO6c_KBoH6-w7CTZrw',
      avatarAlt: 'David Miller',
      badge: {
        kind: 'lightbulb',
        className: 'bg-indigo-600',
      },
    },
    {
      id: 3,
      audience: 'everyone',
      author: 'Jessica Wong',
      verb: 'gave a high-five to',
      target: "Liam O'Reilly",
      time: 'Yesterday',
      tag: '#TeamSpirit',
      points: 180,
      initialClaps: 45,
      comments: 15,
      body: 'Thanks for organizing the team lunch, Liam. It was exactly what we needed to recharge.',
      media: {
        src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBtp9ugrAHEsIT9X7h4TxBJS3Vv2M3jMGsB-zODr81l2AC4TDKWJCg18ruEeY0JAi708vVAVFR2KSAnb_bG08cby1ENpjhdoBP9Ee3wRveq_NrgsqOX7hPTQ21LJfHZYB8cddkN0bYSh1ss89B93iyZg69g4Zg8dTaEB3Xf2RdcPAnYckhh85LDFRgPL1QV24Ds9u9ts1K1nAjkQ6AJRFJUeyPp2ETJgSR_QgHHmDyjwsRomHK3WZ2IJsSdcYk4EbpWyG_Zq4J12HA',
        alt: 'Team lunch celebration',
        label: 'View Album',
      },
      avatar:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuA6Cknyy34cxw0rObjCTqZBJVZvqcINJ5CdcE4bPAuKhOa6i8LJyqTyh7SneWnYDgDeJ1xrc8-PXxGhMx1kZqYs0zqNnw3ATXicr74lpTK5OO-KgVZuJMnC4vifrqkxvtRAuQZifwpp1HX8AaAgUP9LBt72eA1iGtB-1HkXkprGxRy95kF9RtoWhlRtGh5tKY63djz-mtBflR4nPUx9FKS8kjLB8NYRrooD8EWpYB6B6MOrrCOFU52cpIOT3s20PP0h8769zLshnuw',
      avatarAlt: 'Jessica Wong',
      badge: {
        kind: 'heart',
        className: 'bg-emerald-500',
      },
    },
    {
      id: 4,
      audience: 'circle',
      author: 'Ava Patel',
      verb: 'recognized',
      target: 'Support Operations',
      time: 'Today',
      tag: '#ServiceWin',
      points: 320,
      initialClaps: 18,
      comments: 4,
      quote:
        'The response team kept the customer informed through every step and turned a stressful outage into a confident recovery.',
      avatar:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCTr8OUPk3W8C9d3m0M6t0LQ8m8x4e3v8b4eS8Y1n8mR4d3z2b2m9Q0k3uQ7d9xW4nM3pY0oO5mY2kWc2Qf4sB2pQ4dJfS1X0g6rV2nP5xY6sQ4mN0lQ7tF3d2xY8pQ',
      avatarAlt: 'Ava Patel',
      badge: {
        kind: 'award',
        className: 'bg-teal-500',
      },
    },
  ];

  const [wallFilter, setWallFilter] = useState<WallFilter>('Everyone');
  const [showAllRecognitions, setShowAllRecognitions] = useState(false);
  const [clapCounts, setClapCounts] = useState<Record<number, number>>(() =>
    Object.fromEntries(wallItems.map((item) => [item.id, item.initialClaps])),
  );
  const [userClaps, setUserClaps] = useState<Set<number>>(new Set());
  const [commentCounts, setCommentCounts] = useState<Record<number, number>>(() =>
    Object.fromEntries(wallItems.map((item) => [item.id, item.comments])),
  );
  const [openCommentInput, setOpenCommentInput] = useState<number | null>(null);
  const [commentTexts, setCommentTexts] = useState<Record<number, string>>({});
  const [userCommentsList, setUserCommentsList] = useState<Record<number, Array<{ text: string; author: string }>>>({});

  const focusItems = [
    {
      title: 'Secure a 5-star Google Review',
      subtext: 'Goal: 1 review',
      progress: '0/1',
      completed: false,
      itemClass: 'bg-white border border-slate-100 hover:border-blue-400',
      indicatorClass: 'border-2 border-slate-200',
      titleClass: 'text-on-background',
      subtextClass: 'text-slate-400',
    },
    {
      title: 'Maintain NPS score above 75 today',
      subtext: 'Current: 86 NPS',
      progress: '',
      completed: true,
      itemClass: 'bg-slate-50/50 border border-transparent hover:border-slate-200',
      indicatorClass: 'border-2 border-teal-500 bg-teal-500/10 flex items-center justify-center',
      titleClass: 'text-slate-500 line-through',
      subtextClass: 'text-teal-500 font-medium',
    },
    {
      title: 'Complete 100% seat belt usage',
      subtext: 'Safety compliance goal',
      progress: '',
      completed: false,
      itemClass: 'bg-white border border-slate-100 hover:border-secondary/30',
      indicatorClass: 'border-2 border-slate-200',
      titleClass: 'text-on-background',
      subtextClass: 'text-slate-400',
    },
  ];

  const completedFocusCount = focusItems.filter((item) => item.completed).length;
  const visibleWallItems = wallItems.filter(
    (item) => wallFilter === 'Everyone' || item.audience === 'circle',
  );
  const displayedWallItems = showAllRecognitions ? visibleWallItems : visibleWallItems.slice(0, 3);
  const totalWallClaps = displayedWallItems.reduce((sum, item) => sum + (clapCounts[item.id] ?? item.initialClaps), 0);

  const handleClap = (itemId: number) => {
    const hasClapped = userClaps.has(itemId);

    setUserClaps((current) => {
      const newClaps = new Set(current);
      if (hasClapped) {
        newClaps.delete(itemId);
      } else {
        newClaps.add(itemId);
      }
      return newClaps;
    });

    setClapCounts((counts) => ({
      ...counts,
      [itemId]: (counts[itemId] ?? 0) + (hasClapped ? -1 : 1),
    }));
  };

  const handleComment = (itemId: number) => {
    setOpenCommentInput(openCommentInput === itemId ? null : itemId);
  };

  const handleSubmitComment = (itemId: number) => {
    const text = commentTexts[itemId]?.trim();
    if (!text) return;

    setUserCommentsList((current) => ({
      ...current,
      [itemId]: [...(current[itemId] ?? []), { text, author: 'You' }],
    }));

    setCommentCounts((counts) => ({
      ...counts,
      [itemId]: (counts[itemId] ?? 0) + 1,
    }));

    setCommentTexts((current) => ({
      ...current,
      [itemId]: '',
    }));
  };

  const renderBadge = (kind: WallBadge) => {
    if (kind === 'award') {
      return <Award className="w-3 h-3 fill-current" />;
    }

    if (kind === 'lightbulb') {
      return <Lightbulb className="w-3 h-3 fill-current" />;
    }

    return <Heart className="w-3 h-3 fill-current" />;
  };

  return (
    <div className="animate-in fade-in duration-500">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
        <div>
          <h1 className="text-4xl font-medium text-on-background tracking-tight">Good morning, Alex! 👋</h1>
          <p className="text-on-surface-variant text-base mt-1">Ready for another day of making an impact?</p>
        </div>
        <div className="flex gap-3">
          <button className="bg-secondary text-white px-6 py-3 rounded-xl font-medium flex items-center gap-2 hover:bg-secondary/90 transition-all shadow-lg shadow-secondary/20 active:scale-95">
            <PartyPopper className="w-5 h-5 fill-current" />
            Give Zola
          </button>
        </div>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Individual Focus & Progress */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* Today's Focus */}
          <div className="bg-white p-6 rounded-xl shadow-[0_10px_40px_-10px_rgba(21,25,108,0.08)] border border-slate-100">
            <div className="flex justify-between items-center mb-5">
              <h3 className="font-medium text-indigo-900 flex items-center gap-2">
                <Zap className="text-amber-500 w-5 h-5 fill-current" />
                Today's Focus
              </h3>
              <span className="text-xs font-medium text-slate-400 bg-slate-50 px-2 py-1 rounded">
                {completedFocusCount}/{focusItems.length} Done
              </span>
            </div>
            <ul className="space-y-3">
              {focusItems.map((item) => (
                <li
                  key={item.title}
                  className={`flex items-center justify-between p-3 rounded-xl transition-colors cursor-pointer group ${item.itemClass}`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-6 h-6 rounded-full ${item.indicatorClass}`}>
                      {item.completed ? <Check className="w-4 h-4 text-teal-500" strokeWidth={4} /> : null}
                    </div>
                    <div className="flex flex-col">
                      <span className={`text-sm font-medium ${item.titleClass}`}>{item.title}</span>
                      <span className={`text-[10px] ${item.subtextClass}`}>{item.subtext}</span>
                    </div>
                  </div>
                  {item.progress ? <span className="text-[10px] font-medium text-slate-400">{item.progress}</span> : null}
                </li>
              ))}
            </ul>
          </div>

          {/* Your Wins */}
          <div className="bg-white p-6 rounded-xl shadow-[0_10px_40px_-10px_rgba(21,25,108,0.08)] border border-slate-100 relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex justify-between items-center mb-6">
                <span className="text-xs font-medium text-on-surface-variant uppercase tracking-widest">Your Wins</span>
                <Sparkles className="text-amber-500 w-5 h-5 fill-current" />
              </div>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-3xl font-medium text-primary">12,450</span>
                <span className="text-teal-500 font-medium text-sm">Points available</span>
              </div>
              <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden mt-4">
                <div className="bg-linear-to-r from-primary to-secondary h-full rounded-full w-[75%]"></div>
              </div>
              <p className="text-[11px] text-on-surface-variant mt-3 font-normal flex items-center gap-1">
                <Info className="w-3 h-3" />
                Only 550 points until your "Executive Badge" upgrade!
              </p>
            </div>
          </div>

          {/* Tips & Earnings */}
          <div className="bg-linear-to-br from-amber-50 to-white p-6 rounded-xl shadow-[0_10px_40px_-10px_rgba(21,25,108,0.08)] border border-amber-100">
            <div className="flex justify-between items-center mb-5">
              <h3 className="font-medium text-indigo-900 flex items-center gap-2">
                <PiggyBank className="text-amber-500 w-5 h-5 fill-current" />
                Tips & Micro-bonuses
              </h3>
              <span className="text-[10px] bg-white px-2 py-1 rounded-full font-medium text-amber-500 border border-amber-100 shadow-sm">NEW</span>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-white/60 rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-teal-500/10 flex items-center justify-center">
                    <ShoppingBag className="text-teal-500 w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-indigo-900">Customer Gratitude</p>
                    <p className="text-[10px] text-slate-500">Quick help with order #124</p>
                  </div>
                </div>
                <span className="font-medium text-teal-500">+$15.00</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-white/60 rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-amber-500/10 flex items-center justify-center">
                    <Coffee className="text-amber-500 w-4 h-4 fill-current" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-indigo-900">Sarah J. sent a coffee</p>
                    <p className="text-[10px] text-slate-500">For the great presentation</p>
                  </div>
                </div>
                <span className="font-medium text-amber-500">+$5.00</span>
              </div>
            </div>
            <button className="w-full mt-4 py-2.5 text-xs font-medium text-indigo-900 hover:bg-amber-100/50 rounded-lg transition-colors border border-dashed border-amber-200">
              View Earning History
            </button>
          </div>

          {/* Achievements */}
          <div className="bg-white p-6 rounded-xl shadow-[0_10px_40px_-10px_rgba(21,25,108,0.08)] border border-slate-100">
            <span className="text-xs font-medium text-on-surface-variant uppercase tracking-widest block mb-4">Milestone Badges</span>
            <div className="flex justify-around">
              <div className="flex flex-col items-center gap-2">
                <div className="w-14 h-14 rounded-full bg-primary-fixed flex items-center justify-center text-primary shadow-[0_0_0_2px_white,0_0_0_4px_#0262ff]">
                  <Award className="w-8 h-8 fill-current" />
                </div>
                <span className="text-[10px] font-medium text-center">Innovator</span>
              </div>
              <div className="flex flex-col items-center gap-2 opacity-50">
                <div className="w-14 h-14 rounded-full bg-secondary-fixed flex items-center justify-center text-secondary">
                  <Handshake className="w-8 h-8 fill-current" />
                </div>
                <span className="text-[10px] font-medium text-center">Team Hero</span>
              </div>
              <div className="flex flex-col items-center gap-2 opacity-50">
                <div className="w-14 h-14 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface-variant">
                  <Gauge className="w-8 h-8 fill-current" />
                </div>
                <span className="text-[10px] font-medium text-center">Velocity</span>
              </div>
            </div>
            <button className="w-full mt-6 py-2.5 bg-slate-50 text-indigo-700 font-medium text-sm rounded-xl hover:bg-indigo-100 transition-colors">
              View Trophy Room
            </button>
          </div>
        </div>

        {/* Right Column: Wall of Fame */}
        <div className="lg:col-span-8">
          <div className="bg-white rounded-2xl shadow-[0_10px_40px_-10px_rgba(21,25,108,0.08)] border border-slate-100 h-full flex flex-col overflow-hidden">
            <div className="p-6 border-b border-slate-50 bg-linear-to-r from-white to-slate-50/30 space-y-5">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center">
                    <PartyPopper className="text-secondary w-5 h-5 fill-current" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-normal text-indigo-900">Wall of Fame</h2>
                    <p className="text-[11px] text-slate-400 font-medium uppercase tracking-wide">Celebrate the moments that move the team</p>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <button
                    className={`px-4 py-2 text-xs font-medium rounded-full transition-all ${
                      wallFilter === 'Everyone'
                        ? 'bg-white text-indigo-900 shadow-sm'
                        : 'text-slate-500 hover:text-indigo-900'
                    }`}
                    onClick={() => {
                      setWallFilter('Everyone');
                      setShowAllRecognitions(false);
                    }}
                  >
                    Everyone
                  </button>
                  <button
                    className={`px-4 py-2 text-xs font-medium rounded-full transition-all ${
                      wallFilter === 'My Circle'
                        ? 'bg-white text-indigo-900 shadow-sm'
                        : 'text-slate-500 hover:text-indigo-900'
                    }`}
                    onClick={() => {
                      setWallFilter('My Circle');
                      setShowAllRecognitions(false);
                    }}
                  >
                    My Circle
                  </button>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500">
                <span className="px-3 py-1 rounded-full bg-white border border-slate-100 font-medium">{displayedWallItems.length} recognitions</span>
                <span className="px-3 py-1 rounded-full bg-white border border-slate-100 font-medium">{totalWallClaps} claps today</span>
                <span className="px-3 py-1 rounded-full bg-white border border-slate-100 font-medium">{wallFilter} feed</span>
              </div>
            </div>

            <div className="flex-1 p-6 space-y-6 overflow-y-auto">
              {displayedWallItems.map((item) => {
                const claps = clapCounts[item.id] ?? item.initialClaps;
                const comments = commentCounts[item.id] ?? item.comments;

                return (
                  <div
                    key={item.id}
                    className={`group relative bg-white transition-all duration-300 rounded-3xl border p-5 shadow-sm hover:-translate-y-0.5 hover:shadow-md ${
                      item.featured ? 'border-secondary/20 ring-1 ring-secondary/10' : 'border-slate-100'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="relative shrink-0">
                        <div
                          className={`w-14 h-14 rounded-2xl overflow-hidden border-2 ${
                            item.featured ? 'border-secondary shadow-[0_0_0_2px_white,0_0_0_4px_#0262ff] rotate-3' : 'border-slate-100 -rotate-2'
                          } group-hover:rotate-0 transition-transform`}
                        >
                          <img alt={item.avatarAlt} className="w-full h-full object-cover" src={item.avatar} />
                        </div>
                        <div className={`absolute -bottom-2 -right-2 ${item.badge.className} text-white rounded-full p-1.5 border-2 border-white shadow-md`}>
                          {renderBadge(item.badge.kind)}
                        </div>
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col xl:flex-row xl:items-start xl:justify-between gap-3 mb-3">
                          <div className="min-w-0">
                            <p className="text-sm font-medium text-indigo-900">
                              {item.author} <span className="text-slate-400 font-normal">{item.verb}</span> {item.target}
                            </p>
                            <p className="text-[11px] text-slate-400 mt-0.5 flex items-center gap-1 flex-wrap">
                              <Clock className="w-3 h-3" />
                              {item.time} • <span className="text-secondary font-medium">{item.tag}</span>
                              {item.audience === 'circle' ? <span className="text-slate-300">• My Circle</span> : null}
                            </p>
                          </div>
                          <div className="flex items-center gap-1 text-teal-500 bg-teal-50 px-3 py-1.5 rounded-xl border border-teal-100 shrink-0">
                            <span className="text-xs font-black">+{item.points}</span>
                            <Coins className="w-3 h-3 fill-current" />
                          </div>
                        </div>

                        {item.quote ? (
                          <div className={`mt-2 p-5 rounded-2xl border italic text-indigo-900/80 text-base relative shadow-sm ${item.featured ? 'bg-linear-to-br from-white to-blue-50 border-blue-50' : 'bg-slate-50/60 border-slate-100'}`}>
                            {item.quote}
                            <Quote className={`absolute -top-3 -left-2 w-8 h-8 fill-current ${item.featured ? 'text-indigo-200 opacity-50' : 'text-slate-200'}`} />
                          </div>
                        ) : null}

                        {item.body ? <p className="mt-3 text-indigo-900/80 text-base">{item.body}</p> : null}

                        {item.media ? (
                          <div className="mt-4 rounded-2xl overflow-hidden h-48 w-full relative group shadow-sm border border-slate-100">
                            <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src={item.media.src} alt={item.media.alt} />
                            <div className="absolute inset-0 bg-indigo-900/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                              <span className="bg-white text-indigo-900 px-4 py-2 rounded-full font-medium text-sm shadow-lg">{item.media.label}</span>
                            </div>
                          </div>
                        ) : null}

                        <div className="mt-4 flex items-center gap-6">
                          <button
                            className={`flex items-center gap-2 text-xs font-medium transition-all hover:scale-105 ${
                              userClaps.has(item.id)
                                ? 'text-red-500 hover:text-red-600'
                                : 'text-slate-500 hover:text-secondary'
                            }`}
                            onClick={() => handleClap(item.id)}
                            type="button"
                          >
                            <Heart className={`w-5 h-5 ${
                              userClaps.has(item.id) ? 'fill-current' : 'fill-none stroke-current stroke-1.5'
                            }`} /> {claps} Claps
                          </button>
                          <button
                            className={`flex items-center gap-2 text-xs font-medium transition-all hover:scale-105 ${
                              openCommentInput === item.id
                                ? 'text-secondary'
                                : 'text-slate-500 hover:text-secondary'
                            }`}
                            onClick={() => handleComment(item.id)}
                            type="button"
                          >
                            <MessageCircle className="w-5 h-5" /> {comments} Comments
                          </button>
                        </div>

                        {openCommentInput === item.id ? (
                          <div className="mt-4 space-y-3 pt-4 border-t border-slate-100">
                            {userCommentsList[item.id]?.map((comment, idx) => (
                              <div key={idx} className="bg-slate-50 p-3 rounded-xl">
                                <p className="text-xs font-medium text-indigo-900">{comment.author}</p>
                                <p className="text-sm text-slate-700 mt-1">{comment.text}</p>
                              </div>
                            ))}

                            <div className="flex gap-2">
                              <input
                                type="text"
                                placeholder="Add a comment..."
                                className="flex-1 px-3 py-2 text-xs rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-secondary"
                                value={commentTexts[item.id] ?? ''}
                                onChange={(e) =>
                                  setCommentTexts((current) => ({
                                    ...current,
                                    [item.id]: e.target.value,
                                  }))
                                }
                                onKeyDown={(e) => {
                                  if (e.key === 'Enter') {
                                    handleSubmitComment(item.id);
                                  }
                                }}
                              />
                              <button
                                className="px-3 py-2 text-xs font-medium bg-secondary text-white rounded-lg hover:bg-secondary/90 transition-all"
                                onClick={() => handleSubmitComment(item.id)}
                                type="button"
                              >
                                Send
                              </button>
                            </div>
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </div>
                );
              })}

              {displayedWallItems.length === 0 ? (
                <div className="text-center py-12 text-slate-400">
                  No recognitions match this view yet.
                </div>
              ) : null}
            </div>

            <div className="p-6 bg-slate-50/50 border-t border-slate-50 text-center">
              <button
                className="text-sm font-medium text-indigo-700 hover:text-indigo-900 transition-colors flex items-center justify-center gap-2 mx-auto"
                onClick={() => setShowAllRecognitions((current) => !current)}
                type="button"
              >
                <ChevronDown className={`w-4 h-4 transition-transform ${showAllRecognitions ? 'rotate-180' : ''}`} />
                {showAllRecognitions ? 'Show fewer recognitions' : 'See more recognitions'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
