/**
 * LinkedElite - Professional Network Clone
 * Core Application Logic (Vanilla JavaScript ES6+)
 */

// ==========================================================================
// 1. Initial State / Mock Database
// ==========================================================================

const AppState = {
  // Current logged-in user profile
  currentUser: {
    name: "Alex Morgan",
    headline: "Senior Frontend Architect | UI/UX Specialist | Open Source Enthusiast",
    location: "San Francisco Bay Area",
    avatar: "assets/images/avatar_user.jpg",
    banner: "assets/images/profile_banner.jpg",
    about: "Passionate Frontend Architect with 8+ years of experience designing and implementing scalable web applications. Strong expert in modern HTML5, CSS3/Sass, JavaScript (ES6+), and responsive layouts. Focused on creating sleek user interfaces, prioritizing accessibility (a11y), clean code design systems, and rendering performance.",
    connectionsCount: 482,
    experiences: [
      {
        id: "exp1",
        title: "Principal Frontend Developer",
        company: "Vortex Labs",
        start: "2023-03",
        end: "", // Empty means Current
        current: true,
        description: "Leading a team of 6 engineers redesigning the core developer dashboard. Established a custom glassmorphism design system in pure CSS reducing CSS bundle size by 40%.\nArchitected modular micro-frontends with pure vanilla Web Components."
      },
      {
        id: "exp2",
        title: "Senior UI Engineer",
        company: "MetaSphere Inc.",
        start: "2020-01",
        end: "2023-02",
        current: false,
        description: "Implemented high-performance web solutions with focus on page speed. Optimized web vitals across core products, resulting in a 25% increase in conversion rates.\nCollaborated closely with UX teams to create interactive animations and prototyping patterns."
      }
    ],
    education: [
      {
        id: "edu1",
        school: "UC Berkeley",
        degree: "Bachelor of Science",
        field: "Computer Science & Engineering",
        start: 2015,
        end: 2019
      }
    ],
    skills: ["JavaScript (ES6+)", "CSS Grid & Flexbox", "UI/UX Engineering", "Responsive Web Design", "Web Accessibility (WCAG)", "CSS Variables", "HTML5 Semantic Architecture"]
  },

  // Connection invitations
  invitations: [
    {
      id: "inv1",
      name: "Sarah Jenkins",
      headline: "Lead UX Researcher at Google",
      avatar: "assets/images/avatar_connection.jpg",
      mutual: 14
    },
    {
      id: "inv2",
      name: "David Chen",
      headline: "Principal Software Architect at Netflix",
      avatar: "assets/images/avatar_connection.jpg", // reuse or generate
      mutual: 23
    }
  ],

  // Suggested connections
  suggestions: [
    {
      id: "sug1",
      name: "Emily Watson",
      headline: "AI/ML Product Manager at OpenAI",
      avatar: "assets/images/avatar_connection.jpg",
      mutual: 5
    },
    {
      id: "sug2",
      name: "Marcus Aurelius",
      headline: "Tech Writer & Developer Advocate",
      avatar: "assets/images/avatar_connection.jpg",
      mutual: 9
    },
    {
      id: "sug3",
      name: "Sophia Rodriguez",
      headline: "Director of Engineering at Stripe",
      avatar: "assets/images/avatar_connection.jpg",
      mutual: 32
    },
    {
      id: "sug4",
      name: "Jordan Belfort",
      headline: "Sales Consultant & Leadership Coach",
      avatar: "assets/images/avatar_connection.jpg",
      mutual: 1
    }
  ],

  // Feed posts
  posts: [
    {
      id: "post1",
      authorName: "Sarah Jenkins",
      authorHeadline: "Lead UX Researcher at Google",
      authorAvatar: "assets/images/avatar_connection.jpg",
      time: "2h ago",
      text: "I am absolutely thrilled to share that our design research paper on the evolution of 'Glassmorphism in User Interfaces' was awarded best paper at the CHI 2026 conference! 🏆✨\n\nThank you to my incredible co-authors and the design engineering team for pushing the boundaries of aesthetics and performance. Here is a snap of my current office workspace where most of the brainstorms took place! 👇",
      image: "assets/images/post_workspace.jpg",
      likesCount: 142,
      hasLiked: false,
      comments: [
        {
          authorName: "David Chen",
          authorHeadline: "Principal Software Architect at Netflix",
          authorAvatar: "assets/images/avatar_connection.jpg",
          text: "Huge congratulations Sarah! Well deserved. The research on performance-first background blurs was outstanding.",
          time: "1h ago"
        },
        {
          authorName: "Alex Morgan",
          authorHeadline: "Senior Frontend Architect",
          authorAvatar: "assets/images/avatar_user.jpg",
          text: "This is phenomenal work! I've been implementing your findings on CSS backdrop-filters and they provide amazing depth in light/dark mode.",
          time: "45m ago"
        }
      ]
    },
    {
      id: "post2",
      authorName: "David Chen",
      authorHeadline: "Principal Software Architect at Netflix",
      authorAvatar: "assets/images/avatar_connection.jpg",
      time: "5h ago",
      text: "Friendly reminder to web developers: Do not let framework abstractions hide the basics. Master CSS Layouts (Grid/Flexbox) and standard Vanilla DOM APIs. \n\nNo build tool will replace writing semantic, clean HTML. It saves bytes, runs faster, and improves accessibility out of the box. Stay curious! 🚀",
      image: "",
      likesCount: 389,
      hasLiked: true,
      comments: [
        {
          authorName: "Sophia Rodriguez",
          authorHeadline: "Director of Engineering at Stripe",
          authorAvatar: "assets/images/avatar_connection.jpg",
          text: "Preach! We recently did a benchmark where removing unnecessary wrapper divs cut rendering recalculations in half.",
          time: "3h ago"
        }
      ]
    }
  ],

  // Job openings
  jobs: [
    {
      id: "job1",
      title: "Senior UI/UX Engineer",
      company: "Google",
      location: "Mountain View, CA (Hybrid)",
      type: "Full-time",
      salary: "$160,000 - $210,000 / year",
      logoLetter: "G",
      logoColor: "#ea4335",
      posted: "1 day ago",
      skills: ["CSS Grid", "Web Accessibility", "Vanilla JS", "Performance Optimization"],
      description: "As a Senior UI/UX Engineer at Google, you will bridge the gap between design and engineering. You will collaborate on core features of our search and workplace applications, crafting premium interactive layouts and setting new standards for page responsiveness and design systems consistency.\n\nQualifications:\n- 5+ years of experience in front-end development.\n- Deep understanding of browser rendering engines, painting pipelines, and style recalculations.\n- Portfolio demonstrating elegant fluid designs and motion animations."
    },
    {
      id: "job2",
      title: "Lead Web Architect (Remote)",
      company: "Airbnb",
      location: "San Francisco, CA (Remote)",
      type: "Remote",
      salary: "$180,000 - $240,000 / year",
      logoLetter: "A",
      logoColor: "#ff5a5f",
      posted: "3 days ago",
      skills: ["Semantic HTML", "Build Architectures", "Core Web Vitals", "Design Systems"],
      description: "Airbnb is looking for a Lead Web Architect to spearhead core platform improvements. You will establish coding standards, guide performance audits, and define guidelines that ensure our global web platform remains lightweight, localized, and highly accessible on any device."
    },
    {
      id: "job3",
      title: "Frontend Developer (Contract)",
      company: "Stripe",
      location: "Seattle, WA (Hybrid)",
      type: "Contract",
      salary: "$90 - $120 / hour",
      logoLetter: "S",
      logoColor: "#635bff",
      posted: "5 days ago",
      skills: ["JavaScript", "CSS Variables", "Interaction Animations", "Responsive design"],
      description: "We are seeking a Frontend Developer for a 6-month contract to refine the user onboarding dashboards. You will work on interactive data charts, clean payment flows, and micro-interactions that make the user experience feel extremely fluid."
    }
  ],

  // Active Job Applications Tracker
  applications: [],

  // Chat Conversations
  conversations: [
    {
      id: "chat1",
      name: "Sarah Jenkins",
      avatar: "assets/images/avatar_connection.jpg",
      headline: "Lead UX Researcher at Google",
      status: "online",
      messages: [
        { sender: "them", text: "Hi Alex! I saw your recent post about fluid typography. The formulas you used were super elegant.", time: "10:15 AM" },
        { sender: "me", text: "Thanks, Sarah! Using CSS clamp() is a lifesaver for responsive layouts. Glad you liked it.", time: "10:17 AM" },
        { sender: "them", text: "Absolutely. I'd love to chat more about how you handle sizing scales for design systems. Are you free for a virtual coffee sometime next week?", time: "10:18 AM" }
      ]
    },
    {
      id: "chat2",
      name: "David Chen",
      avatar: "assets/images/avatar_connection.jpg",
      headline: "Principal Software Architect at Netflix",
      status: "away",
      messages: [
        { sender: "them", text: "Hey Alex, are you attending the Web Performance Meetup on Thursday?", time: "Yesterday" },
        { sender: "me", text: "Hey David! Yes, I'm planning to. I'm actually co-presenting a quick talk on DOM reduction strategies.", time: "Yesterday" },
        { sender: "them", text: "Outstanding! Looking forward to it. I'll make sure to secure a front row seat.", time: "Yesterday" }
      ]
    }
  ],

  // Notifications
  notifications: [
    {
      id: "notif1",
      type: "like",
      unread: true,
      actorName: "Sarah Jenkins",
      actorAvatar: "assets/images/avatar_connection.jpg",
      text: "liked your post on <strong>Web Accessibility Best Practices</strong>.",
      time: "2h ago"
    },
    {
      id: "notif2",
      type: "accept",
      unread: true,
      actorName: "David Chen",
      actorAvatar: "assets/images/avatar_connection.jpg",
      text: "accepted your connection invitation. Start a conversation!",
      time: "5h ago"
    },
    {
      id: "notif3",
      type: "comment",
      unread: false,
      actorName: "Sophia Rodriguez",
      actorAvatar: "assets/images/avatar_connection.jpg",
      text: "commented on David Chen's post: <strong>'Preach! We recently did a benchmark...'</strong>",
      time: "1d ago"
    },
    {
      id: "notif4",
      type: "alert",
      unread: true,
      actorName: "LinkedElite Careers",
      actorAvatar: "assets/images/avatar_connection.jpg", // fallback
      text: "New job matches your profile: <strong>Staff Frontend Engineer at Microsoft</strong>.",
      time: "2d ago"
    }
  ],

  activeChatId: "chat1",
  activeView: "feed"
};

// ==========================================================================
// 2. Application Init & Event Listeners Routing
// ==========================================================================

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  setupNavigation();
  setupModals();
  setupPostCreation();
  setupNetworkHandlers();
  setupJobsHandlers();
  setupMessagingHandlers();
  setupNotificationsHandlers();
  setupProfileHandlers();
  setupSearch();

  // Render initial application state content
  renderFeed();
  renderNetwork();
  renderJobs();
  renderMessaging();
  renderNotifications();
  renderProfile();
  updateHeaderBadges();

  showToast("Welcome back, Alex! App initialized successfully.", "info");
});

// ==========================================================================
// 3. Global Helpers & Toast Alert System
// ==========================================================================

function showToast(message, type = "success") {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  
  let icon = "";
  if (type === "success") {
    icon = `<svg viewBox="0 0 24 24" width="18" height="18" class="text-success"><path fill="currentColor" d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>`;
  } else if (type === "danger") {
    icon = `<svg viewBox="0 0 24 24" width="18" height="18" class="text-danger"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>`;
  } else {
    icon = `<svg viewBox="0 0 24 24" width="18" height="18" class="text-primary"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>`;
  }

  toast.innerHTML = `
    ${icon}
    <span>${message}</span>
  `;

  container.appendChild(toast);

  // Trigger Slideout
  setTimeout(() => {
    toast.classList.add("toast-fadeout");
    toast.addEventListener("animationend", () => {
      toast.remove();
    });
  }, 3500);
}

function updateHeaderBadges() {
  // Update Network count badge
  const netBadge = document.getElementById("badge-network");
  const netInvites = AppState.invitations.length;
  if (netInvites > 0) {
    netBadge.textContent = netInvites;
    netBadge.style.display = "block";
  } else {
    netBadge.style.display = "none";
  }

  // Update Messages count badge
  const msgBadge = document.getElementById("badge-messages");
  const msgCount = AppState.conversations.reduce((acc, c) => acc + c.messages.filter(m => m.sender === "them").length, 0);
  if (msgCount > 0) {
    msgBadge.textContent = Math.min(msgCount, 9);
    msgBadge.style.display = "block";
  } else {
    msgBadge.style.display = "none";
  }

  // Update Notifications badge
  const notifBadge = document.getElementById("badge-notifications");
  const unreadNotifsCount = AppState.notifications.filter(n => n.unread).length;
  if (unreadNotifsCount > 0) {
    notifBadge.textContent = unreadNotifsCount;
    notifBadge.style.display = "block";
  } else {
    notifBadge.style.display = "none";
  }
}

// Format relative date / timestamp
function formatTime(timeStr) {
  return timeStr; // For mock purposes, reuse predefined
}

// Generate initials for company logo mock
function getInitials(name) {
  return name.split(" ").map(n => n[0]).join("").substring(0, 2).toUpperCase();
}

// ==========================================================================
// 4. Navigation & Theme Engine
// ==========================================================================

function initTheme() {
  const themeToggleBtn = document.getElementById("theme-toggle-btn");
  const sunIcon = themeToggleBtn.querySelector(".sun-icon");
  const moonIcon = themeToggleBtn.querySelector(".moon-icon");

  // Load saved theme
  const savedTheme = localStorage.getItem("theme") || "light";
  if (savedTheme === "dark") {
    document.body.classList.add("dark-theme");
    sunIcon.style.display = "none";
    moonIcon.style.display = "block";
  }

  themeToggleBtn.addEventListener("click", () => {
    const isDark = document.body.classList.toggle("dark-theme");
    if (isDark) {
      localStorage.setItem("theme", "dark");
      sunIcon.style.display = "none";
      moonIcon.style.display = "block";
      showToast("Dark theme enabled.", "info");
    } else {
      localStorage.setItem("theme", "light");
      sunIcon.style.display = "block";
      moonIcon.style.display = "none";
      showToast("Light theme enabled.", "info");
    }
  });
}

function setupNavigation() {
  const navButtons = document.querySelectorAll(".nav-item[data-view], .mobile-nav-item[data-view]");
  const viewPanels = document.querySelectorAll(".view-panel");

  // Logo redirects to Home feed
  document.getElementById("logo-btn").addEventListener("click", () => {
    switchView("feed");
  });

  navButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const targetView = btn.getAttribute("data-view");
      switchView(targetView);
    });
  });

  // Clicking Network Connection count stats on left sidebar redirects to Network view
  const netStatBtn = document.getElementById("view-network-stat-btn");
  if (netStatBtn) {
    netStatBtn.addEventListener("click", () => {
      switchView("network");
    });
  }
}

function switchView(viewName) {
  if (AppState.activeView === viewName) return;
  AppState.activeView = viewName;

  // Update navigation items active state
  const navButtons = document.querySelectorAll(".nav-item[data-view], .mobile-nav-item[data-view]");
  navButtons.forEach(btn => {
    if (btn.getAttribute("data-view") === viewName) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  // Toggle active view panel content
  const viewPanels = document.querySelectorAll(".view-panel");
  viewPanels.forEach(panel => {
    if (panel.id === `${viewName}-view`) {
      panel.classList.add("active-view");
    } else {
      panel.classList.remove("active-view");
    }
  });

  // Special responsiveness handler: In mobile view, stack details panels appropriately
  if (window.innerWidth < 768) {
    // If jobs, reset detail display
    if (viewName === "jobs") {
      document.getElementById("job-details-container").style.display = "none";
      document.getElementById("jobs-list-container").style.display = "flex";
    }
  }

  // Scroll to top on page switches
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ==========================================================================
// 5. Search Functionality
// ==========================================================================

function setupSearch() {
  const searchInput = document.getElementById("global-search");

  searchInput.addEventListener("input", (e) => {
    const query = e.target.value.toLowerCase().trim();
    
    // Depending on what view is active, filter its contents
    if (AppState.activeView === "feed") {
      filterFeed(query);
    } else if (AppState.activeView === "jobs") {
      filterJobs(query, "");
    } else if (AppState.activeView === "network") {
      filterNetwork(query);
    } else if (AppState.activeView === "messaging") {
      filterChatsSidebar(query);
    }
  });
}

// ==========================================================================
// 6. Modal Overlay Handler System
// ==========================================================================

function setupModals() {
  const modals = [
    { trigger: "open-post-modal-btn", overlay: "post-modal", close: "close-post-modal" },
    { trigger: "open-edit-profile-btn", overlay: "edit-profile-modal", close: "close-profile-modal", cancel: "cancel-profile-edit" },
    { trigger: "edit-about-btn", overlay: "edit-about-modal", close: "close-about-modal", cancel: "cancel-about-edit" },
    { trigger: "add-experience-btn", overlay: "experience-modal", close: "close-experience-modal", cancel: "cancel-experience-btn" },
    { trigger: "add-education-btn", overlay: "education-modal", close: "close-education-modal", cancel: "cancel-education-btn" },
    { trigger: "add-skill-btn", overlay: "skill-modal", close: "close-skill-modal", cancel: "cancel-skill-btn" },
    { trigger: "open-post-job-btn", overlay: "post-job-modal", close: "close-post-job-modal", cancel: "cancel-post-job-btn" },
    { trigger: null, overlay: "apply-job-modal", close: "close-apply-job-modal", cancel: "cancel-apply-job-btn" },
    { trigger: null, overlay: "share-modal", close: "close-share-modal" }
  ];

  modals.forEach(m => {
    const overlayElement = document.getElementById(m.overlay);
    if (!overlayElement) return;

    if (m.trigger) {
      const triggerBtn = document.getElementById(m.trigger);
      if (triggerBtn) {
        triggerBtn.addEventListener("click", () => openModal(m.overlay));
      }
    }

    const closeBtn = document.getElementById(m.close);
    if (closeBtn) {
      closeBtn.addEventListener("click", () => closeModal(m.overlay));
    }

    if (m.cancel) {
      const cancelBtn = document.getElementById(m.cancel);
      if (cancelBtn) {
        cancelBtn.addEventListener("click", (e) => {
          e.preventDefault();
          closeModal(m.overlay);
        });
      }
    }

    // Close on overlay backdrop click
    overlayElement.addEventListener("click", (e) => {
      if (e.target === overlayElement) {
        closeModal(m.overlay);
      }
    });
  });
}

function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add("open-modal");
    document.body.style.overflow = "hidden"; // Prevent background scroll
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove("open-modal");
    document.body.style.overflow = ""; // Restore scroll
  }
}

// ==========================================================================
// 7. Home Feed View Features
// ==========================================================================

function setupPostCreation() {
  const textarea = document.getElementById("post-text-input");
  const postBtn = document.getElementById("submit-post-btn");
  const photoBtn = document.getElementById("modal-add-photo-btn");
  const fileInput = document.getElementById("post-file-input");
  const previewContainer = document.getElementById("post-image-preview-container");
  const previewImg = document.getElementById("post-image-preview");
  const removeImgBtn = document.getElementById("remove-post-image-btn");

  let attachedImageBase64 = "";

  // Shortcuts on feed trigger post modal directly
  const feedPhotoBtn = document.getElementById("post-opt-photo");
  const feedVideoBtn = document.getElementById("post-opt-video");
  const feedEventBtn = document.getElementById("post-opt-event");
  const feedArticleBtn = document.getElementById("post-opt-article");

  const handleQuickTrigger = (e) => {
    e.preventDefault();
    openModal("post-modal");
    if (e.currentTarget.id === "post-opt-photo") {
      fileInput.click();
    }
  };

  [feedPhotoBtn, feedVideoBtn, feedEventBtn, feedArticleBtn].forEach(el => {
    if (el) el.addEventListener("click", handleQuickTrigger);
  });

  // Enable / disable post button
  textarea.addEventListener("input", () => {
    postBtn.disabled = textarea.value.trim() === "" && attachedImageBase64 === "";
  });

  // Trigger file browser inside modal
  photoBtn.addEventListener("click", () => {
    fileInput.click();
  });

  // Handle local image attachment preview
  fileInput.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        showToast("Image size exceeds 2MB limit.", "danger");
        return;
      }
      
      const reader = new FileReader();
      reader.onload = (event) => {
        attachedImageBase64 = event.target.result;
        previewImg.src = attachedImageBase64;
        previewContainer.style.display = "block";
        postBtn.disabled = false; // Enabled because there's an image
      };
      reader.readAsDataURL(file);
    }
  });

  // Remove attached image
  removeImgBtn.addEventListener("click", () => {
    attachedImageBase64 = "";
    previewImg.src = "";
    previewContainer.style.display = "none";
    fileInput.value = "";
    postBtn.disabled = textarea.value.trim() === "";
  });

  // Submit Post
  postBtn.addEventListener("click", () => {
    const textContent = textarea.value.trim();
    if (textContent === "" && attachedImageBase64 === "") return;

    // Create a new post item
    const newPost = {
      id: "post_" + Date.now(),
      authorName: AppState.currentUser.name,
      authorHeadline: AppState.currentUser.headline,
      authorAvatar: AppState.currentUser.avatar,
      time: "Just now",
      text: textContent,
      image: attachedImageBase64,
      likesCount: 0,
      hasLiked: false,
      comments: []
    };

    // Prepend to posts list
    AppState.posts.unshift(newPost);
    renderFeed();

    // Reset forms & close
    textarea.value = "";
    attachedImageBase64 = "";
    previewImg.src = "";
    previewContainer.style.display = "none";
    fileInput.value = "";
    postBtn.disabled = true;

    closeModal("post-modal");
    showToast("Post published successfully!");
  });
}

function renderFeed() {
  const container = document.getElementById("posts-container");
  if (!container) return;

  if (AppState.posts.length === 0) {
    container.innerHTML = `
      <div class="card" style="text-align:center; padding: 40px 16px;">
        <p class="text-muted">No posts found matching search.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = AppState.posts.map(post => {
    const likeClass = post.hasLiked ? "act-btn liked" : "act-btn";
    const likeIconColor = post.hasLiked ? "var(--primary)" : "currentColor";
    const attachmentHTML = post.image 
      ? `<div class="post-attachment"><img src="${post.image}" alt="Attached Post Image"></div>` 
      : "";

    // Build comments list
    const commentsListHTML = post.comments.map(c => `
      <div class="comment-item">
        <img src="${c.authorAvatar}" alt="Commenter Avatar" class="comment-avatar">
        <div class="comment-content-bubble">
          <div class="comment-author-name">${c.authorName}</div>
          <div class="comment-author-headline">${c.authorHeadline}</div>
          <div class="comment-body">${c.text}</div>
        </div>
      </div>
    `).join("");

    return `
      <article class="card feed-post-card" id="${post.id}">
        <div class="post-header">
          <div class="post-author-info">
            <img src="${post.authorAvatar}" alt="Author Avatar" class="post-author-avatar">
            <div>
              <a href="#" class="author-name">${post.authorName}</a>
              <p class="author-headline">${post.authorHeadline}</p>
              <div class="post-time-row">
                <span>${post.time}</span>
                <span>•</span>
                <svg viewBox="0 0 24 24" width="12" height="12"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
              </div>
            </div>
          </div>
          <button class="post-action-btn" aria-label="Post Action Menu">
            <svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>
          </button>
        </div>

        <div class="post-body">
          <p class="post-text">${post.text}</p>
          ${attachmentHTML}
        </div>

        <div class="post-stats-row">
          <div class="post-likes-stat">
            <span class="like-emoji-icon">👍</span>
            <span><span class="like-count">${post.likesCount}</span> likes</span>
          </div>
          <div>
            <span>${post.comments.length} comments</span>
          </div>
        </div>

        <div class="post-act-btn-row">
          <button class="${likeClass}" onclick="toggleLike('${post.id}')">
            <svg viewBox="0 0 24 24"><path fill="${likeIconColor}" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
            <span>Like</span>
          </button>
          <button class="act-btn" onclick="toggleCommentsDrawer('${post.id}')">
            <svg viewBox="0 0 24 24"><path fill="currentColor" d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z"/></svg>
            <span>Comment</span>
          </button>
          <button class="act-btn" onclick="triggerShare('${post.id}')">
            <svg viewBox="0 0 24 24"><path fill="currentColor" d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"/></svg>
            <span>Share</span>
          </button>
        </div>

        <!-- Comments Drawer -->
        <div class="post-comments-section" id="comments-${post.id}" style="display: none;">
          <div class="comment-input-box">
            <img src="${AppState.currentUser.avatar}" alt="Current User Avatar" class="comment-input-avatar">
            <div class="comment-form">
              <input type="text" class="comment-textarea" placeholder="Add a comment..." onkeydown="submitCommentOnEnter(event, '${post.id}')">
              <button class="comment-submit-btn" onclick="submitCommentBtn('${post.id}')">Post</button>
            </div>
          </div>
          <div class="comments-list">
            ${commentsListHTML}
          </div>
        </div>
      </article>
    `;
  }).join("");
}

function filterFeed(query) {
  const originalPosts = AppState.posts;
  if (query === "") {
    renderFeed();
    return;
  }
  AppState.posts = originalPosts.filter(p => p.text.toLowerCase().includes(query) || p.authorName.toLowerCase().includes(query));
  renderFeed();
  AppState.posts = originalPosts; // Restore
}

// Inline toggle of likes
window.toggleLike = function(postId) {
  const post = AppState.posts.find(p => p.id === postId);
  if (post) {
    post.hasLiked = !post.hasLiked;
    post.likesCount += post.hasLiked ? 1 : -1;
    
    // Update DOM instantly instead of re-rendering everything
    const postCard = document.getElementById(postId);
    if (postCard) {
      const likeBtn = postCard.querySelector(".act-btn:first-child");
      const likeCountSpan = postCard.querySelector(".like-count");
      
      if (post.hasLiked) {
        likeBtn.classList.add("liked");
        likeBtn.querySelector("svg path").setAttribute("fill", "var(--primary)");
      } else {
        likeBtn.classList.remove("liked");
        likeBtn.querySelector("svg path").setAttribute("fill", "currentColor");
      }
      likeCountSpan.textContent = post.likesCount;
    }
  }
};

window.toggleCommentsDrawer = function(postId) {
  const drawer = document.getElementById(`comments-${postId}`);
  if (drawer) {
    const isHidden = drawer.style.display === "none";
    drawer.style.display = isHidden ? "block" : "none";
  }
};

window.submitCommentOnEnter = function(event, postId) {
  if (event.key === "Enter" && !event.shiftKey) {
    event.preventDefault();
    submitComment(postId, event.target);
  }
};

window.submitCommentBtn = function(postId) {
  const drawer = document.getElementById(`comments-${postId}`);
  const input = drawer.querySelector(".comment-textarea");
  submitComment(postId, input);
};

function submitComment(postId, inputElement) {
  const commentText = inputElement.value.trim();
  if (commentText === "") return;

  const post = AppState.posts.find(p => p.id === postId);
  if (post) {
    const newComment = {
      authorName: AppState.currentUser.name,
      authorHeadline: AppState.currentUser.headline,
      authorAvatar: AppState.currentUser.avatar,
      text: commentText,
      time: "Just now"
    };

    post.comments.push(newComment);
    inputElement.value = "";
    
    // Refresh feed layout comments list
    const drawer = document.getElementById(`comments-${postId}`);
    const commentsList = drawer.querySelector(".comments-list");
    
    const newCommentHTML = document.createElement("div");
    newCommentHTML.className = "comment-item";
    newCommentHTML.innerHTML = `
      <img src="${newComment.authorAvatar}" alt="Commenter Avatar" class="comment-avatar">
      <div class="comment-content-bubble">
        <div class="comment-author-name">${newComment.authorName}</div>
        <div class="comment-author-headline">${newComment.authorHeadline}</div>
        <div class="comment-body">${newComment.text}</div>
      </div>
    `;
    
    commentsList.appendChild(newCommentHTML);
    
    // Update comments counts in stats row
    const postCard = document.getElementById(postId);
    const commentsStat = postCard.querySelector(".post-stats-row div:last-child span");
    commentsStat.textContent = `${post.comments.length} comments`;
    
    showToast("Comment posted!");
  }
}

// Share Modal Action trigger
let selectedPostIdForSharing = null;
window.triggerShare = function(postId) {
  selectedPostIdForSharing = postId;
  openModal("share-modal");
};

function setupShareActions() {
  const copyLinkBtn = document.getElementById("share-copy-link-btn");
  const sendChatBtn = document.getElementById("share-chat-btn");
  const repostBtn = document.getElementById("share-repost-btn");

  copyLinkBtn.addEventListener("click", () => {
    const postLink = `${window.location.origin}/post/${selectedPostIdForSharing}`;
    
    navigator.clipboard.writeText(postLink).then(() => {
      closeModal("share-modal");
      showToast("Post link copied to clipboard!", "success");
    }).catch(err => {
      closeModal("share-modal");
      showToast("Failed to copy link.", "danger");
    });
  });

  sendChatBtn.addEventListener("click", () => {
    closeModal("share-modal");
    switchView("messaging");
    // Auto populate text in active chat
    const chatInput = document.getElementById("chat-textarea-input");
    if (chatInput) {
      chatInput.value = `Hey, check out this post: ${window.location.origin}/post/${selectedPostIdForSharing}`;
      chatInput.focus();
    }
  });

  repostBtn.addEventListener("click", () => {
    const targetPost = AppState.posts.find(p => p.id === selectedPostIdForSharing);
    if (targetPost) {
      const repost = {
        id: "post_" + Date.now(),
        authorName: AppState.currentUser.name,
        authorHeadline: AppState.currentUser.headline,
        authorAvatar: AppState.currentUser.avatar,
        time: "Just now",
        text: `♻️ Reposted from ${targetPost.authorName}:\n\n"${targetPost.text.substring(0, 100)}..."`,
        image: targetPost.image,
        likesCount: 0,
        hasLiked: false,
        comments: []
      };

      AppState.posts.unshift(repost);
      renderFeed();
      closeModal("share-modal");
      showToast("Reposted to your feed!");
    }
  });
}
// Init share actions
setupShareActions();

// ==========================================================================
// 8. My Network View Features
// ==========================================================================

function setupNetworkHandlers() {
  // Event listeners are bound within rendering logic
}

function renderNetwork() {
  const invitesContainer = document.getElementById("invites-container");
  const invitesSection = document.getElementById("invitations-section");
  const suggestionsContainer = document.getElementById("suggestions-container");
  const sidebarCount = document.getElementById("sidebar-conn-count");
  const headerCount = document.getElementById("network-total-count");
  const profileConnCount = document.getElementById("profile-connections-count");
  const sidebarSuggestions = document.getElementById("sidebar-suggestions-container");

  // Sync Stats Counters
  sidebarCount.textContent = AppState.currentUser.connectionsCount;
  headerCount.textContent = `${AppState.currentUser.connectionsCount} Connections`;
  profileConnCount.textContent = AppState.currentUser.connectionsCount;

  // 1. Render Pending Invitations
  const invitesCountBadge = document.getElementById("invites-count");
  if (AppState.invitations.length === 0) {
    invitesSection.style.display = "none";
  } else {
    invitesSection.style.display = "block";
    invitesCountBadge.textContent = AppState.invitations.length;

    invitesContainer.innerHTML = AppState.invitations.map(invite => `
      <div class="invite-card" id="invite-${invite.id}">
        <div class="invite-user-info">
          <img src="${invite.avatar}" alt="Inviter Avatar" class="invite-avatar">
          <div class="invite-details">
            <h4>${invite.name}</h4>
            <p>${invite.headline}</p>
            <p class="text-light" style="margin-top:2px;">${invite.mutual} mutual connections</p>
          </div>
        </div>
        <div class="invite-actions">
          <button class="btn btn-ghost btn-sm" onclick="rejectInvite('${invite.id}')">Ignore</button>
          <button class="btn btn-outline btn-sm" onclick="acceptInvite('${invite.id}')">Accept</button>
        </div>
      </div>
    `).join("");
  }

  // 2. Render Suggested Connections
  suggestionsContainer.innerHTML = AppState.suggestions.map(sug => `
    <div class="suggest-card" id="sug-${sug.id}">
      <div class="suggest-banner"></div>
      <button class="suggest-close-btn" onclick="removeSuggestion('${sug.id}')">&times;</button>
      <div class="suggest-avatar-wrapper">
        <img src="${sug.avatar}" alt="Suggestion Avatar" class="suggest-avatar">
      </div>
      <div class="suggest-info">
        <h4 class="suggest-name">${sug.name}</h4>
        <p class="suggest-headline">${sug.headline}</p>
        <p class="suggest-mutual">${sug.mutual} mutual connections</p>
      </div>
      <div class="suggest-btn-wrapper">
        <button class="btn btn-outline btn-sm btn-full suggest-btn" id="btn-sug-${sug.id}" onclick="connectSuggestion('${sug.id}')">Connect</button>
      </div>
    </div>
  `).join("");

  // 3. Render Right Sidebar suggestions
  sidebarSuggestions.innerHTML = AppState.suggestions.slice(0, 3).map(sug => `
    <div class="rec-item" id="rec-item-${sug.id}">
      <img src="${sug.avatar}" alt="Rec Avatar" class="rec-avatar">
      <div class="rec-info">
        <h4 class="rec-name">${sug.name}</h4>
        <p class="rec-headline">${sug.headline}</p>
        <button class="btn btn-outline btn-sm rec-btn" id="btn-rec-${sug.id}" onclick="connectSuggestion('${sug.id}')">
          <svg viewBox="0 0 24 24" width="14" height="14" style="margin-right:2px;"><path fill="currentColor" d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>
          Connect
        </button>
      </div>
    </div>
  `).join("");
}

window.acceptInvite = function(inviteId) {
  const index = AppState.invitations.findIndex(i => i.id === inviteId);
  if (index !== -1) {
    const user = AppState.invitations[index];
    AppState.currentUser.connectionsCount += 1;
    
    // Add connection accept to notifications (simulation)
    const newNotif = {
      id: "notif_" + Date.now(),
      type: "accept",
      unread: true,
      actorName: user.name,
      actorAvatar: user.avatar,
      text: "is now connected with you. Write a message to celebrate!",
      time: "Just now"
    };
    AppState.notifications.unshift(newNotif);

    // Remove invite
    AppState.invitations.splice(index, 1);
    
    // Re-render network dashboard
    renderNetwork();
    renderNotifications();
    updateHeaderBadges();

    showToast(`You are now connected with ${user.name}!`);
  }
};

window.rejectInvite = function(inviteId) {
  const index = AppState.invitations.findIndex(i => i.id === inviteId);
  if (index !== -1) {
    const user = AppState.invitations[index];
    AppState.invitations.splice(index, 1);
    renderNetwork();
    updateHeaderBadges();
    showToast(`Invitation from ${user.name} removed.`, "info");
  }
};

window.connectSuggestion = function(sugId) {
  const sug = AppState.suggestions.find(s => s.id === sugId);
  if (sug) {
    const btn = document.getElementById(`btn-sug-${sugId}`);
    const recBtn = document.getElementById(`btn-rec-${sugId}`);
    
    // Toggle state
    if (btn && btn.textContent === "Connect") {
      btn.textContent = "Pending";
      btn.className = "btn btn-ghost btn-sm btn-full suggest-btn";
      btn.disabled = true;
      if (recBtn) {
        recBtn.textContent = "Pending";
        recBtn.className = "btn btn-ghost btn-sm rec-btn";
        recBtn.disabled = true;
      }
      showToast(`Connection request sent to ${sug.name}.`);
    }
  }
};

window.removeSuggestion = function(sugId) {
  const index = AppState.suggestions.findIndex(s => s.id === sugId);
  if (index !== -1) {
    AppState.suggestions.splice(index, 1);
    renderNetwork();
  }
};

function filterNetwork(query) {
  const originalSuggestions = AppState.suggestions;
  if (query === "") {
    renderNetwork();
    return;
  }
  AppState.suggestions = originalSuggestions.filter(s => s.name.toLowerCase().includes(query) || s.headline.toLowerCase().includes(query));
  renderNetwork();
  AppState.suggestions = originalSuggestions;
}

// ==========================================================================
// 9. Jobs Portal View Features
// ==========================================================================

let activeSelectedJobId = "job1";

function setupJobsHandlers() {
  const searchBtn = document.getElementById("job-search-btn");
  const postJobForm = document.getElementById("post-job-form");
  const saveJobBtn = document.getElementById("save-post-job-btn");

  // Custom filter pills setup
  const pills = document.querySelectorAll(".filter-pill");
  pills.forEach(pill => {
    pill.addEventListener("click", () => {
      pills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      const jobFilter = pill.getAttribute("data-filter");
      filterJobs("", jobFilter);
    });
  });

  searchBtn.addEventListener("click", () => {
    const query = document.getElementById("job-search-title").value.toLowerCase().trim();
    const loc = document.getElementById("job-search-location").value.toLowerCase().trim();
    filterJobs(query, loc);
  });

  // Handle Post Job creation
  saveJobBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const title = document.getElementById("post-job-title").value.trim();
    const company = document.getElementById("post-job-company").value.trim();
    const location = document.getElementById("post-job-location").value.trim();
    const type = document.getElementById("post-job-type").value;
    const salary = document.getElementById("post-job-salary").value.trim();
    const desc = document.getElementById("post-job-desc").value.trim();

    if (title === "" || company === "" || location === "" || desc === "") {
      showToast("Please fill in all required (*) fields.", "danger");
      return;
    }

    const newJob = {
      id: "job_" + Date.now(),
      title,
      company,
      location,
      type,
      salary: salary || "Competitive Compensation",
      logoLetter: getInitials(company),
      logoColor: getRandomColor(),
      posted: "Just now",
      skills: ["Vanilla JS", "Responsive Design"],
      description: desc
    };

    AppState.jobs.unshift(newJob);
    activeSelectedJobId = newJob.id;
    renderJobs();
    closeModal("post-job-modal");
    postJobForm.reset();
    showToast("Job opening posted successfully!");
  });

  setupJobApplicationDragDrop();
}

function getRandomColor() {
  const colors = ["#004182", "#10b981", "#8b5cf6", "#f59e0b", "#f43f5e", "#06b6d4"];
  return colors[Math.floor(Math.random() * colors.length)];
}

function renderJobs() {
  const listContainer = document.getElementById("jobs-list-container");
  const detailContainer = document.getElementById("job-details-container");

  if (AppState.jobs.length === 0) {
    listContainer.innerHTML = `<p class="text-muted" style="grid-column: span 2; text-align:center; padding:32px;">No vacancies match your filters.</p>`;
    detailContainer.style.display = "none";
    return;
  }

  // 1. Render job listings cards on the left
  listContainer.innerHTML = AppState.jobs.map(job => {
    const isSelected = job.id === activeSelectedJobId ? "selected" : "";
    return `
      <div class="job-item-card ${isSelected}" onclick="selectJob('${job.id}')">
        <div class="job-logo" style="background-color: ${job.logoColor}15; color: ${job.logoColor}; border-color: ${job.logoColor}30;">
          ${job.logoLetter}
        </div>
        <div class="job-info">
          <h4>${job.title}</h4>
          <p class="job-company">${job.company}</p>
          <p class="job-meta-row">${job.location} • ${job.posted}</p>
          <span class="job-badge">${job.type}</span>
        </div>
      </div>
    `;
  }).join("");

  // 2. Render selected job details description panel on the right
  const job = AppState.jobs.find(j => j.id === activeSelectedJobId) || AppState.jobs[0];
  if (job) {
    activeSelectedJobId = job.id;
    
    // Check if user already applied to this job
    const hasApplied = AppState.applications.includes(job.id);
    const applyBtnText = hasApplied ? "Applied ✓" : "Apply Now";
    const applyBtnClass = hasApplied ? "btn btn-primary btn-success disabled" : "btn btn-primary";
    const applyBtnDisableAttr = hasApplied ? "disabled" : "";

    const skillsHTML = job.skills.map(s => `<span class="skill-pill">${s}</span>`).join("");

    detailContainer.style.display = "block";
    detailContainer.innerHTML = `
      <div class="job-detail-header">
        <div class="job-logo" style="background-color: ${job.logoColor}15; color: ${job.logoColor}; border-color: ${job.logoColor}30; width:56px; height:56px; font-size:22px;">
          ${job.logoLetter}
        </div>
        <div class="job-detail-title-wrapper">
          <h2>${job.title}</h2>
          <p class="text-primary bold" style="margin-top:2px;">${job.company}</p>
          <p class="text-muted" style="font-size:12px; margin-top:2px;">${job.location} • ${job.posted} • <span class="text-primary bold">${job.salary}</span></p>
        </div>
      </div>
      <div class="job-detail-cta">
        <button class="${applyBtnClass}" id="apply-job-action-btn" ${applyBtnDisableAttr} onclick="openApplyModal('${job.id}')">${applyBtnText}</button>
        <button class="btn btn-outline">Save Job</button>
      </div>
      <div class="job-detail-body">
        <h3>Job Description</h3>
        <p>${job.description.replace(/\n/g, "<br>")}</p>
        
        <h3 style="margin-top:20px;">Skills Required</h3>
        <div class="skills-grid" style="margin-top:8px;">
          ${skillsHTML}
        </div>
      </div>
    `;
  }
}

window.selectJob = function(jobId) {
  activeSelectedJobId = jobId;
  renderJobs();

  // On small/mobile screens, slide detail view in on top
  if (window.innerWidth < 992) {
    const detailsCol = document.getElementById("job-details-container");
    const listCol = document.getElementById("jobs-list-container");
    
    detailsCol.style.display = "block";
    listCol.style.display = "none";
    
    // Add back button dynamically to details card
    const header = detailsCol.querySelector(".job-detail-header");
    if (!detailsCol.querySelector(".btn-back-to-jobs")) {
      const backBtn = document.createElement("button");
      backBtn.className = "btn btn-outline btn-sm btn-back-to-jobs";
      backBtn.style.marginBottom = "16px";
      backBtn.innerHTML = `
        <svg viewBox="0 0 24 24" width="16" height="16" style="vertical-align:middle; margin-right:4px;"><path fill="currentColor" d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
        Back to Listings
      `;
      backBtn.addEventListener("click", () => {
        detailsCol.style.display = "none";
        listCol.style.display = "flex";
      });
      detailsCol.insertBefore(backBtn, detailsCol.firstChild);
    }
  }
};

function filterJobs(titleQuery, locationOrTypeQuery) {
  const originalJobs = AppState.jobs;
  
  AppState.jobs = originalJobs.filter(job => {
    const matchesTitle = job.title.toLowerCase().includes(titleQuery) || 
                         job.company.toLowerCase().includes(titleQuery) ||
                         job.description.toLowerCase().includes(titleQuery);
                         
    let matchesType = true;
    if (locationOrTypeQuery !== "" && locationOrTypeQuery !== "all") {
      matchesType = job.type === locationOrTypeQuery || 
                    job.location.toLowerCase().includes(locationOrTypeQuery.toLowerCase());
    }
    
    return matchesTitle && matchesType;
  });

  if (AppState.jobs.length > 0) {
    activeSelectedJobId = AppState.jobs[0].id;
  }
  
  renderJobs();
  AppState.jobs = originalJobs; // Restore list
}

// Multi-step Application Modal logic
let currentApplyingJobId = null;

window.openApplyModal = function(jobId) {
  const job = AppState.jobs.find(j => j.id === jobId);
  if (!job) return;

  currentApplyingJobId = jobId;

  // Pre-fill application info
  document.getElementById("apply-job-header-title").textContent = job.title;
  document.getElementById("apply-job-header-company").textContent = `At ${job.company}`;
  document.getElementById("apply-fullname").value = AppState.currentUser.name;
  document.getElementById("apply-email").value = "alex.morgan@linkedelite.com";

  // Reset file input preview
  const dropzone = document.getElementById("apply-resume-dropzone");
  const filenameDisplay = document.getElementById("apply-resume-filename");
  const resumeInput = document.getElementById("apply-resume-input");
  resumeInput.value = "";
  filenameDisplay.style.display = "none";
  dropzone.style.display = "block";

  openModal("apply-job-modal");
};

function setupJobApplicationDragDrop() {
  const dropzone = document.getElementById("apply-resume-dropzone");
  const fileInput = document.getElementById("apply-resume-input");
  const filenameDisplay = document.getElementById("apply-resume-filename");
  const submitBtn = document.getElementById("submit-apply-job-btn");

  dropzone.addEventListener("click", () => fileInput.click());

  dropzone.addEventListener("dragover", (e) => {
    e.preventDefault();
    dropzone.classList.add("dragover");
  });

  dropzone.addEventListener("dragleave", () => {
    dropzone.classList.remove("dragover");
  });

  dropzone.addEventListener("drop", (e) => {
    e.preventDefault();
    dropzone.classList.remove("dragover");
    const file = e.dataTransfer.files[0];
    handleResumeFile(file);
  });

  fileInput.addEventListener("change", (e) => {
    const file = e.target.files[0];
    handleResumeFile(file);
  });

  function handleResumeFile(file) {
    if (file) {
      const extension = file.name.split(".").pop().toLowerCase();
      if (!["pdf", "doc", "docx"].includes(extension)) {
        showToast("Invalid file type. Resumes must be PDF, DOC, or DOCX.", "danger");
        return;
      }

      filenameDisplay.innerHTML = `
        <span>📄 ${file.name} (${(file.size / 1024).toFixed(1)} KB)</span>
        <button type="button" class="remove-preview-btn" style="position:static; width:20px; height:20px; font-size:12px;" onclick="removeAttachedResume()">&times;</button>
      `;
      filenameDisplay.style.display = "flex";
      dropzone.style.display = "none";
    }
  }

  // Handle Application submission
  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const name = document.getElementById("apply-fullname").value.trim();
    const email = document.getElementById("apply-email").value.trim();
    const resumeVal = fileInput.value;

    if (name === "" || email === "" || (!resumeVal && filenameDisplay.style.display === "none")) {
      showToast("Please fill in all required fields and upload your resume.", "danger");
      return;
    }

    // Trigger visual loading animation in modal
    const body = document.getElementById("apply-modal-body");
    const footer = document.getElementById("apply-modal-footer");
    
    // Save original layouts
    const originalBodyHTML = body.innerHTML;
    const originalFooterHTML = footer.innerHTML;

    body.innerHTML = `
      <div style="text-align:center; padding: 40px 16px;">
        <div class="splash-loader" style="margin: 0 auto 16px auto; width:40px; height:40px; border-width: 4px; display:block;"></div>
        <h4>Submitting application...</h4>
        <p class="text-muted" style="margin-top:6px; font-size:12px;">Transmitting resume to applicant tracking system.</p>
      </div>
    `;
    footer.style.display = "none";

    setTimeout(() => {
      // Application Success State
      body.innerHTML = `
        <div style="text-align:center; padding: 30px 16px;">
          <svg viewBox="0 0 24 24" width="60" height="60" class="text-success" style="margin-bottom:12px;"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
          <h3>Application Sent!</h3>
          <p class="text-muted" style="margin-top:6px; font-size:13px;">Your profile and resume were shared with the recruitment team at the company. Good luck!</p>
        </div>
      `;

      // Set applied in DB
      AppState.applications.push(currentApplyingJobId);
      renderJobs();

      // Show toast
      showToast("Application submitted successfully!");

      // Add close button
      const okBtn = document.createElement("button");
      okBtn.className = "btn btn-primary";
      okBtn.style.marginTop = "16px";
      okBtn.textContent = "Done";
      okBtn.addEventListener("click", () => {
        closeModal("apply-job-modal");
        
        // Restore layout after closing modal
        setTimeout(() => {
          body.innerHTML = originalBodyHTML;
          footer.innerHTML = originalFooterHTML;
          footer.style.display = "flex";
          setupJobApplicationDragDrop(); // Rebind events
        }, 300);
      });
      body.appendChild(okBtn);

    }, 1800);
  });
}

window.removeAttachedResume = function() {
  const dropzone = document.getElementById("apply-resume-dropzone");
  const filenameDisplay = document.getElementById("apply-resume-filename");
  const resumeInput = document.getElementById("apply-resume-input");
  resumeInput.value = "";
  filenameDisplay.style.display = "none";
  dropzone.style.display = "block";
};

// ==========================================================================
// 10. Messaging / Chat View Features
// ==========================================================================

function setupMessagingHandlers() {
  // Global search inside chat threads sidebar
  const search = document.getElementById("chats-search-input");
  search.addEventListener("input", (e) => {
    filterChatsSidebar(e.target.value.toLowerCase().trim());
  });
}

function renderMessaging() {
  const listContainer = document.getElementById("chats-list-container");
  const mainChatContainer = document.getElementById("chat-main-container");

  // 1. Render chats threads sidebar list
  listContainer.innerHTML = AppState.conversations.map(conv => {
    const isActive = conv.id === AppState.activeChatId ? "active" : "";
    const lastMsg = conv.messages[conv.messages.length - 1];
    const previewText = lastMsg ? lastMsg.text : "No messages yet";
    const previewTime = lastMsg ? lastMsg.time : "";

    return `
      <div class="chat-thread-item ${isActive}" onclick="selectConversation('${conv.id}')">
        <div class="chat-thread-avatar-wrapper">
          <img src="${conv.avatar}" alt="Thread User Avatar" class="chat-thread-avatar">
          <div class="status-dot ${conv.status === 'online' ? 'online' : ''}"></div>
        </div>
        <div class="chat-thread-info">
          <div class="chat-thread-name-row">
            <span class="chat-thread-name">${conv.name}</span>
            <span class="chat-thread-time">${previewTime}</span>
          </div>
          <p class="chat-thread-preview">${previewText}</p>
        </div>
      </div>
    `;
  }).join("");

  // 2. Render Selected Active Chat Message Bubble screen
  const activeChat = AppState.conversations.find(c => c.id === AppState.activeChatId);
  if (activeChat) {
    const messagesHTML = activeChat.messages.map(m => `
      <div class="message-bubble ${m.sender === 'me' ? 'outgoing' : 'incoming'}">
        <div class="message-text-card">
          ${m.text.replace(/\n/g, "<br>")}
        </div>
        <div class="message-meta">${m.time}</div>
      </div>
    `).join("");

    mainChatContainer.innerHTML = `
      <div class="chat-header-bar">
        <div class="chat-active-user">
          <img src="${activeChat.avatar}" alt="Active Chat Avatar" class="chat-active-avatar">
          <div class="chat-active-details">
            <h3>${activeChat.name}</h3>
            <p>${activeChat.headline}</p>
          </div>
        </div>
        <div class="chat-actions-right">
          <button aria-label="Start Video Call">
            <svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"/></svg>
          </button>
          <button aria-label="Chat Info Details">
            <svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
          </button>
        </div>
      </div>

      <div class="chat-messages-area" id="chat-bubbles-container">
        ${messagesHTML}
      </div>

      <div class="chat-input-bar">
        <textarea class="chat-textarea" id="chat-textarea-input" placeholder="Write a message..." onkeydown="handleChatInputKeydown(event)"></textarea>
        <button class="chat-send-btn" onclick="sendChatMessage()" aria-label="Send message">
          <svg viewBox="0 0 24 24" width="18" height="18"><path fill="#ffffff" d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
        </button>
      </div>
    `;

    // Scroll to bottom of message bubbles area
    scrollToChatBottom();
  }
}

window.selectConversation = function(chatId) {
  AppState.activeChatId = chatId;
  renderMessaging();

  // Responsiveness toggle
  if (window.innerWidth < 992) {
    const listSidebar = document.querySelector(".chats-sidebar");
    const activeMain = document.querySelector(".chat-main");
    
    listSidebar.style.display = "none";
    activeMain.style.display = "flex";
    
    // Inject Back button
    const header = activeMain.querySelector(".chat-header-bar");
    if (!header.querySelector(".btn-back-to-threads")) {
      const backBtn = document.createElement("button");
      backBtn.className = "btn-icon btn-back-to-threads";
      backBtn.style.marginRight = "8px";
      backBtn.innerHTML = `<svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>`;
      backBtn.addEventListener("click", () => {
        listSidebar.style.display = "flex";
        activeMain.style.display = "none";
      });
      header.insertBefore(backBtn, header.firstChild);
    }
  }
};

window.handleChatInputKeydown = function(e) {
  if (e.key === "Enter" && !e.shiftKey) {
    e.preventDefault();
    sendChatMessage();
  }
};

window.sendChatMessage = function() {
  const input = document.getElementById("chat-textarea-input");
  const text = input.value.trim();
  if (text === "") return;

  const activeChat = AppState.conversations.find(c => c.id === AppState.activeChatId);
  if (activeChat) {
    const date = new Date();
    const timeString = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    const newMsg = {
      sender: "me",
      text: text,
      time: timeString
    };

    activeChat.messages.push(newMsg);
    input.value = "";

    // Instantly append to chat DOM
    const bubblesContainer = document.getElementById("chat-bubbles-container");
    const newBubble = document.createElement("div");
    newBubble.className = "message-bubble outgoing";
    newBubble.innerHTML = `
      <div class="message-text-card">${newMsg.text.replace(/\n/g, "<br>")}</div>
      <div class="message-meta">${newMsg.time}</div>
    `;
    bubblesContainer.appendChild(newBubble);
    scrollToChatBottom();

    // Rerender threads sidebar list for updated preview
    const threads = document.getElementById("chats-list-container");
    const activeItem = threads.querySelector(".chat-thread-item.active");
    if (activeItem) {
      activeItem.querySelector(".chat-thread-preview").textContent = text;
      activeItem.querySelector(".chat-thread-time").textContent = timeString;
    }

    // Trigger Connection automated smart reply bot after 1.5 seconds
    simulateAutomatedResponse(activeChat);
  }
};

function scrollToChatBottom() {
  const bubblesContainer = document.getElementById("chat-bubbles-container");
  if (bubblesContainer) {
    bubblesContainer.scrollTop = bubblesContainer.scrollHeight;
  }
}

function simulateAutomatedResponse(activeChat) {
  const bubblesContainer = document.getElementById("chat-bubbles-container");
  
  // 1. Create Typing Indicator HTML
  const indicator = document.createElement("div");
  indicator.className = "typing-indicator";
  indicator.id = "chat-typing-indicator";
  indicator.innerHTML = `
    <div class="typing-dot"></div>
    <div class="typing-dot"></div>
    <div class="typing-dot"></div>
  `;
  bubblesContainer.appendChild(indicator);
  scrollToChatBottom();

  // Smart replies database mapping
  const botReplies = [
    "Thanks for the message! I'm currently in a UX workshop, but let's connect next week.",
    "That sounds interesting! Let's arrange a 15-min zoom call to align on details.",
    "Hey! Yes, I read your article on Core Web Vitals and shared it with my team. Great insights.",
    "I appreciate you reaching out! I've forwarded your CV to our product team, they'll review it.",
    "That is exactly what we were researching last quarter. Let's schedule a chat."
  ];

  setTimeout(() => {
    // Remove typing indicator
    const indicatorEl = document.getElementById("chat-typing-indicator");
    if (indicatorEl) indicatorEl.remove();

    const date = new Date();
    const timeString = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const replyText = botReplies[Math.floor(Math.random() * botReplies.length)];

    const newReply = {
      sender: "them",
      text: replyText,
      time: timeString
    };

    activeChat.messages.push(newReply);
    
    // Render message bubble
    const newBubble = document.createElement("div");
    newBubble.className = "message-bubble incoming";
    newBubble.innerHTML = `
      <div class="message-text-card">${newReply.text}</div>
      <div class="message-meta">${newReply.time}</div>
    `;
    bubblesContainer.appendChild(newBubble);
    scrollToChatBottom();

    // Update thread preview
    const threads = document.getElementById("chats-list-container");
    const activeItem = threads.querySelector(".chat-thread-item.active");
    if (activeItem) {
      activeItem.querySelector(".chat-thread-preview").textContent = replyText;
      activeItem.querySelector(".chat-thread-time").textContent = timeString;
    }

    // Play visual notification indicator or toast
    showToast(`New message from ${activeChat.name}`, "info");

  }, 1600);
}

function filterChatsSidebar(query) {
  const original = AppState.conversations;
  if (query === "") {
    renderMessaging();
    return;
  }
  
  const threads = document.getElementById("chats-list-container");
  threads.innerHTML = original.filter(c => c.name.toLowerCase().includes(query) || c.messages.some(m => m.text.toLowerCase().includes(query))).map(conv => {
    const isActive = conv.id === AppState.activeChatId ? "active" : "";
    const lastMsg = conv.messages[conv.messages.length - 1];
    return `
      <div class="chat-thread-item ${isActive}" onclick="selectConversation('${conv.id}')">
        <div class="chat-thread-avatar-wrapper">
          <img src="${conv.avatar}" alt="Thread User Avatar" class="chat-thread-avatar">
          <div class="status-dot ${conv.status === 'online' ? 'online' : ''}"></div>
        </div>
        <div class="chat-thread-info">
          <div class="chat-thread-name-row">
            <span class="chat-thread-name">${conv.name}</span>
            <span class="chat-thread-time">${lastMsg ? lastMsg.time : ""}</span>
          </div>
          <p class="chat-thread-preview">${lastMsg ? lastMsg.text : ""}</p>
        </div>
      </div>
    `;
  }).join("");
}

// ==========================================================================
// 11. Notifications Dashboard View
// ==========================================================================

function setupNotificationsHandlers() {
  const markAllBtn = document.getElementById("mark-all-read-btn");
  markAllBtn.addEventListener("click", () => {
    AppState.notifications.forEach(n => n.unread = false);
    renderNotifications();
    updateHeaderBadges();
    showToast("All notifications marked as read.");
  });

  const pills = document.querySelectorAll(".notifications-filters .filter-pill");
  pills.forEach(pill => {
    pill.addEventListener("click", () => {
      pills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      
      const filter = pill.getAttribute("data-notif-filter");
      filterNotifsList(filter);
    });
  });
}

function renderNotifications() {
  const container = document.getElementById("notifications-container");
  if (!container) return;

  container.innerHTML = AppState.notifications.map(notif => {
    const unreadClass = notif.unread ? "unread" : "";
    
    // Choose SVG icon depending on notification type
    let icon = "";
    if (notif.type === "like") {
      icon = `<svg viewBox="0 0 24 24" width="12" height="12"><path fill="#ffffff" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>`;
    } else if (notif.type === "comment") {
      icon = `<svg viewBox="0 0 24 24" width="12" height="12"><path fill="#ffffff" d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/></svg>`;
    } else if (notif.type === "accept") {
      icon = `<svg viewBox="0 0 24 24" width="12" height="12"><path fill="#ffffff" d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3z"/></svg>`;
    } else {
      icon = `<svg viewBox="0 0 24 24" width="12" height="12"><path fill="#ffffff" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>`;
    }

    return `
      <div class="notif-item ${unreadClass}" id="notif-${notif.id}" onclick="clickNotification('${notif.id}')">
        <div class="notif-icon-badge-wrapper">
          <img src="${notif.actorAvatar}" alt="Notif Actor" class="notif-avatar">
          <div class="notif-icon-badge ${notif.type}">
            ${icon}
          </div>
        </div>
        <div class="notif-info-content">
          <p class="notif-text"><strong>${notif.actorName}</strong> ${notif.text}</p>
          <span class="notif-timestamp">${notif.time}</span>
        </div>
        <div class="notif-actions">
          <button class="btn-icon" onclick="deleteNotification(event, '${notif.id}')" aria-label="Dismiss Notification">&times;</button>
        </div>
      </div>
    `;
  }).join("");
}

window.clickNotification = function(notifId) {
  const notif = AppState.notifications.find(n => n.id === notifId);
  if (notif && notif.unread) {
    notif.unread = false;
    renderNotifications();
    updateHeaderBadges();
  }
};

window.deleteNotification = function(e, notifId) {
  e.stopPropagation(); // Avoid triggering card click
  const index = AppState.notifications.findIndex(n => n.id === notifId);
  if (index !== -1) {
    AppState.notifications.splice(index, 1);
    renderNotifications();
    updateHeaderBadges();
    showToast("Notification dismissed.", "info");
  }
};

function filterNotifsList(filterType) {
  const original = AppState.notifications;
  if (filterType === "all") {
    renderNotifications();
    return;
  }
  
  const container = document.getElementById("notifications-container");
  let filtered = [];
  if (filterType === "unread") {
    filtered = original.filter(n => n.unread);
  } else if (filterType === "mentions") {
    filtered = original.filter(n => n.text.toLowerCase().includes("alex")); // Mock query match
  }

  if (filtered.length === 0) {
    container.innerHTML = `<p class="text-muted" style="text-align:center; padding:32px; background:var(--bg-card);">No notifications found.</p>`;
    return;
  }

  container.innerHTML = filtered.map(notif => {
    const unreadClass = notif.unread ? "unread" : "";
    return `
      <div class="notif-item ${unreadClass}" id="notif-${notif.id}" onclick="clickNotification('${notif.id}')">
        <div class="notif-icon-badge-wrapper">
          <img src="${notif.actorAvatar}" alt="Notif Actor" class="notif-avatar">
          <div class="notif-icon-badge ${notif.type}">
            👍
          </div>
        </div>
        <div class="notif-info-content">
          <p class="notif-text"><strong>${notif.actorName}</strong> ${notif.text}</p>
          <span class="notif-timestamp">${notif.time}</span>
        </div>
        <div class="notif-actions">
          <button class="btn-icon" onclick="deleteNotification(event, '${notif.id}')">&times;</button>
        </div>
      </div>
    `;
  }).join("");
}

// ==========================================================================
// 12. Detailed Profile View Features
// ==========================================================================

function setupProfileHandlers() {
  const saveProfileBtn = document.getElementById("save-profile-btn");
  const saveAboutBtn = document.getElementById("save-about-btn");
  const saveExpBtn = document.getElementById("save-experience-btn");
  const saveEduBtn = document.getElementById("save-education-btn");
  const saveSkillBtn = document.getElementById("save-skill-btn");

  // Edit Avatar file reader overlay
  const editAvatarBtn = document.getElementById("edit-avatar-btn");
  const avatarFileInput = document.createElement("input");
  avatarFileInput.type = "file";
  avatarFileInput.accept = "image/*";
  
  editAvatarBtn.addEventListener("click", () => avatarFileInput.click());
  avatarFileInput.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const base64 = event.target.result;
        AppState.currentUser.avatar = base64;
        
        // Sync all avatar references instantly
        document.getElementById("profile-page-avatar").src = base64;
        document.getElementById("sidebar-profile-pic").src = base64;
        document.getElementById("nav-profile-pic").src = base64;
        document.getElementById("create-post-avatar-pic").src = base64;
        document.getElementById("post-modal-avatar-pic").src = base64;
        document.getElementById("mobile-nav-avatar-pic").src = base64;
        
        showToast("Profile image updated successfully!");
      };
      reader.readAsDataURL(file);
    }
  });

  // Edit Banner file reader overlay
  const editBannerBtn = document.getElementById("edit-banner-btn");
  const bannerFileInput = document.createElement("input");
  bannerFileInput.type = "file";
  bannerFileInput.accept = "image/*";

  editBannerBtn.addEventListener("click", () => bannerFileInput.click());
  bannerFileInput.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const base64 = event.target.result;
        AppState.currentUser.banner = base64;
        
        document.getElementById("profile-banner").style.backgroundImage = `url('${base64}')`;
        document.querySelector(".sidebar-banner").style.backgroundImage = `url('${base64}')`;
        
        showToast("Profile banner updated successfully!");
      };
      reader.readAsDataURL(file);
    }
  });

  // 1. Edit Profile Intro Modal Save
  document.getElementById("open-edit-profile-btn").addEventListener("click", () => {
    document.getElementById("edit-name").value = AppState.currentUser.name;
    document.getElementById("edit-headline").value = AppState.currentUser.headline;
    document.getElementById("edit-location").value = AppState.currentUser.location;
  });

  saveProfileBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const name = document.getElementById("edit-name").value.trim();
    const headline = document.getElementById("edit-headline").value.trim();
    const loc = document.getElementById("edit-location").value.trim();

    if (name === "" || headline === "" || loc === "") {
      showToast("Fields cannot be empty.", "danger");
      return;
    }

    AppState.currentUser.name = name;
    AppState.currentUser.headline = headline;
    AppState.currentUser.location = loc;

    // Sync views
    renderProfile();
    
    // Sync Left Sidebar preview cards
    document.getElementById("sidebar-user-name").textContent = name;
    document.getElementById("sidebar-user-headline").textContent = headline;
    document.getElementById("post-modal-user-name").textContent = name;

    closeModal("edit-profile-modal");
    showToast("Profile intro updated.");
  });

  // 2. Edit About Bio Save
  document.getElementById("edit-about-btn").addEventListener("click", () => {
    document.getElementById("edit-about-textarea").value = AppState.currentUser.about;
  });

  saveAboutBtn.addEventListener("click", () => {
    const aboutText = document.getElementById("edit-about-textarea").value.trim();
    AppState.currentUser.about = aboutText;
    document.getElementById("profile-user-about").textContent = aboutText;
    closeModal("edit-about-modal");
    showToast("Biography updated.");
  });

  // 3. Add Experience Save
  saveExpBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const title = document.getElementById("exp-title").value.trim();
    const company = document.getElementById("exp-company").value.trim();
    const start = document.getElementById("exp-start").value;
    const end = document.getElementById("exp-end").value;
    const isCurrent = document.getElementById("exp-current").checked;
    const desc = document.getElementById("exp-description").value.trim();

    if (title === "" || company === "" || start === "") {
      showToast("Please fill in required fields.", "danger");
      return;
    }

    const newExp = {
      id: "exp_" + Date.now(),
      title,
      company,
      start,
      end: isCurrent ? "" : end,
      current: isCurrent,
      description: desc
    };

    AppState.currentUser.experiences.unshift(newExp);
    renderProfile();
    closeModal("experience-modal");
    document.getElementById("add-experience-form").reset();
    showToast("Work experience added!");
  });

  // Checkbox toggle handles end date disable
  const currentCheckbox = document.getElementById("exp-current");
  const endInput = document.getElementById("exp-end");
  currentCheckbox.addEventListener("change", () => {
    endInput.disabled = currentCheckbox.checked;
    if (currentCheckbox.checked) endInput.value = "";
  });

  // 4. Add Education Save
  saveEduBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const school = document.getElementById("edu-school").value.trim();
    const degree = document.getElementById("edu-degree").value.trim();
    const field = document.getElementById("edu-field").value.trim();
    const start = document.getElementById("edu-start").value.trim();
    const end = document.getElementById("edu-end").value.trim();

    if (school === "" || degree === "" || field === "" || start === "" || end === "") {
      showToast("Please fill in all fields.", "danger");
      return;
    }

    const newEdu = {
      id: "edu_" + Date.now(),
      school,
      degree,
      field,
      start: parseInt(start),
      end: parseInt(end)
    };

    AppState.currentUser.education.unshift(newEdu);
    renderProfile();
    closeModal("education-modal");
    document.getElementById("add-education-form").reset();
    showToast("Academic record added!");
  });

  // 5. Add Skill Save
  saveSkillBtn.addEventListener("click", () => {
    const input = document.getElementById("new-skill-input");
    const val = input.value.trim();
    if (val === "") {
      showToast("Skill name cannot be blank.", "danger");
      return;
    }

    if (AppState.currentUser.skills.includes(val)) {
      showToast("Skill already listed on profile.", "info");
      return;
    }

    AppState.currentUser.skills.push(val);
    renderProfile();
    closeModal("skill-modal");
    input.value = "";
    showToast(`Skill '${val}' added to profile.`);
  });
}

function renderProfile() {
  const user = AppState.currentUser;

  // Render Header Details
  document.getElementById("profile-user-name").textContent = user.name;
  document.getElementById("profile-user-headline").textContent = user.headline;
  document.getElementById("profile-user-location").textContent = user.location;
  document.getElementById("profile-user-about").textContent = user.about;

  // Sync profile banner & avatar image DOM elements if not using bases64 yet
  document.getElementById("profile-page-avatar").src = user.avatar;
  document.getElementById("profile-banner").style.backgroundImage = `url('${user.banner}')`;

  // Render Experience chronological timeline
  const expContainer = document.getElementById("experience-container");
  if (user.experiences.length === 0) {
    expContainer.innerHTML = `<p class="text-muted" style="font-size:12px;">Add details of your career journey.</p>`;
  } else {
    expContainer.innerHTML = user.experiences.map(exp => {
      const dates = `${formatMonthYear(exp.start)} – ${exp.current ? 'Present' : formatMonthYear(exp.end)}`;
      const descHTML = exp.description 
        ? `<p class="exp-description">${exp.description.replace(/\n/g, "<br>")}</p>` 
        : "";

      return `
        <div class="experience-item" id="${exp.id}">
          <div class="company-logo-placeholder">
            ${getInitials(exp.company)}
          </div>
          <div class="exp-details">
            <h3>${exp.title}</h3>
            <p class="exp-company-row">${exp.company}</p>
            <p class="exp-timeline">${dates}</p>
            ${descHTML}
          </div>
        </div>
      `;
    }).join("");
  }

  // Render Education Section
  const eduContainer = document.getElementById("education-container");
  if (user.education.length === 0) {
    eduContainer.innerHTML = `<p class="text-muted" style="font-size:12px;">Add details of your schooling history.</p>`;
  } else {
    eduContainer.innerHTML = user.education.map(edu => `
      <div class="education-item" id="${edu.id}">
        <div class="school-logo-placeholder">
          ${getInitials(edu.school)}
        </div>
        <div class="edu-details">
          <h3>${edu.school}</h3>
          <p class="edu-degree-row">${edu.degree}, ${edu.field}</p>
          <p class="edu-timeline">${edu.start} – ${edu.end}</p>
        </div>
      </div>
    `).join("");
  }

  // Render Skills pills list
  const skillsContainer = document.getElementById("skills-container");
  skillsContainer.innerHTML = user.skills.map(s => `
    <span class="skill-pill">${s}</span>
  `).join("");
}

function formatMonthYear(monthString) {
  if (!monthString) return "";
  const [year, month] = monthString.split("-");
  const date = new Date(year, month - 1);
  return date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}
