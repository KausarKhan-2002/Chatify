export const chatUsers = [
  {
    id: "u1",
    name: "John Doe",
    username: "john_doe",
    email: "johndoe@example.com",
    phone: "+1234567890",
    profilePic: "https://randomuser.me/api/portraits/men/1.jpg",
    bio: "Tech enthusiast and coffee lover",
    status: "online",
    lastSeen: "2h ago",
    messages: [
      { from: "u2", to: "u1", message: "Hey John!", timestamp: "2h ago" },
      { from: "u3", to: "u1", message: "Wanna grab coffee?", timestamp: "3h ago" }
    ],
    contacts: ["u2", "u3", "u4"],
    groups: ["g1", "g2"],
    blockedUsers: ["u5"],
    pinnedChats: ["u3"],
    archivedChats: ["u6"],
    callHistory: [
      { with: "u2", type: "voice", duration: "10:30", timestamp: "1 day ago" }
    ]
  },
  {
    id: "u2",
    name: "Jane Smith",
    username: "jane_smith",
    email: "janesmith@example.com",
    phone: "+9876543210",
    profilePic: "https://randomuser.me/api/portraits/women/2.jpg",
    bio: "Travel addict and foodie",
    status: "offline",
    lastSeen: "yesterday",
    messages: [
      { from: "u1", to: "u2", message: "What's up?", timestamp: "yesterday" }
    ],
    contacts: ["u1", "u3", "u5"],
    groups: ["g1"],
    blockedUsers: [],
    pinnedChats: ["u1"],
    archivedChats: [],
    callHistory: [
      { with: "u4", type: "video", duration: "20:15", timestamp: "2 days ago" }
    ]
  },
  {
    id: "u3",
    name: "Michael Brown",
    username: "michael_brown",
    email: "michaelbrown@example.com",
    phone: "+1122334455",
    profilePic: "https://randomuser.me/api/portraits/men/3.jpg",
    bio: "Gamer and software developer",
    status: "busy",
    lastSeen: "30m ago",
    messages: [
      { from: "u1", to: "u3", message: "Let's play COD!", timestamp: "45m ago" }
    ],
    contacts: ["u1", "u2", "u6"],
    groups: ["g2", "g3"],
    blockedUsers: ["u7"],
    pinnedChats: ["u6"],
    archivedChats: ["u2"],
    callHistory: []
  },
  {
    id: "u4",
    name: "Emily Johnson",
    username: "emily_johnson",
    email: "emilyjohnson@example.com",
    phone: "+6677889900",
    profilePic: "https://randomuser.me/api/portraits/women/4.jpg",
    bio: "Nature photographer and explorer",
    status: "away",
    lastSeen: "5h ago",
    messages: [
      { from: "u5", to: "u4", message: "Check out this landscape!", timestamp: "5h ago" }
    ],
    contacts: ["u2", "u5"],
    groups: ["g1"],
    blockedUsers: [],
    pinnedChats: ["u2"],
    archivedChats: [],
    callHistory: [
      { with: "u2", type: "voice", duration: "05:45", timestamp: "3 days ago" }
    ]
  },
  {
    id: "u5",
    name: "Robert Williams",
    username: "robert_williams",
    email: "robertwilliams@example.com",
    phone: "+5544332211",
    profilePic: "https://randomuser.me/api/portraits/men/5.jpg",
    bio: "Movie buff and aspiring director",
    status: "online",
    lastSeen: "active now",
    messages: [
      { from: "u3", to: "u5", message: "Did you watch that new movie?", timestamp: "15m ago" }
    ],
    contacts: ["u1", "u3", "u6"],
    groups: ["g2"],
    blockedUsers: ["u1"],
    pinnedChats: ["u4"],
    archivedChats: [],
    callHistory: [
      { with: "u3", type: "video", duration: "15:20", timestamp: "1 week ago" }
    ]
  },
  {
    id: "u6",
    name: "Sophia Martinez",
    username: "sophia_martinez",
    email: "sophiamartinez@example.com",
    phone: "+9988776655",
    profilePic: "https://randomuser.me/api/portraits/women/6.jpg",
    bio: "AI researcher and bookworm",
    status: "offline",
    lastSeen: "yesterday",
    messages: [
      { from: "u2", to: "u6", message: "Let's catch up soon!", timestamp: "yesterday" }
    ],
    contacts: ["u1", "u3"],
    groups: ["g3"],
    blockedUsers: [],
    pinnedChats: [],
    archivedChats: ["u5"],
    callHistory: [
      { with: "u5", type: "voice", duration: "08:45", timestamp: "4 days ago" }
    ]
  },
  {
    id: "u7",
    name: "Daniel Carter",
    username: "daniel_carter",
    email: "danielcarter@example.com",
    phone: "+7766554433",
    profilePic: "https://randomuser.me/api/portraits/men/7.jpg",
    bio: "Entrepreneur and fitness enthusiast",
    status: "online",
    lastSeen: "3h ago",
    messages: [
      { from: "u6", to: "u7", message: "Any updates on the project?", timestamp: "4h ago" }
    ],
    contacts: ["u4", "u6"],
    groups: ["g1", "g3"],
    blockedUsers: ["u3"],
    pinnedChats: ["u1"],
    archivedChats: [],
    callHistory: []
  },
  {
    id: "u1",
    name: "John Doe",
    username: "john_doe",
    email: "johndoe@example.com",
    phone: "+1234567890",
    profilePic: "https://randomuser.me/api/portraits/men/1.jpg",
    bio: "Tech enthusiast and coffee lover",
    status: "online",
    lastSeen: "2h ago",
    messages: [
      { from: "u2", to: "u1", message: "Hey John!", timestamp: "2h ago" },
      { from: "u3", to: "u1", message: "Wanna grab coffee?", timestamp: "3h ago" }
    ],
    contacts: ["u2", "u3", "u4"],
    groups: ["g1", "g2"],
    blockedUsers: ["u5"],
    pinnedChats: ["u3"],
    archivedChats: ["u6"],
    callHistory: [
      { with: "u2", type: "voice", duration: "10:30", timestamp: "1 day ago" }
    ]
  },
  {
    id: "u2",
    name: "Jane Smith",
    username: "jane_smith",
    email: "janesmith@example.com",
    phone: "+9876543210",
    profilePic: "https://randomuser.me/api/portraits/women/2.jpg",
    bio: "Travel addict and foodie",
    status: "offline",
    lastSeen: "yesterday",
    messages: [
      { from: "u1", to: "u2", message: "What's up?", timestamp: "yesterday" }
    ],
    contacts: ["u1", "u3", "u5"],
    groups: ["g1"],
    blockedUsers: [],
    pinnedChats: ["u1"],
    archivedChats: [],
    callHistory: [
      { with: "u4", type: "video", duration: "20:15", timestamp: "2 days ago" }
    ]
  },
  {
    id: "u3",
    name: "Michael Brown",
    username: "michael_brown",
    email: "michaelbrown@example.com",
    phone: "+1122334455",
    profilePic: "https://randomuser.me/api/portraits/men/3.jpg",
    bio: "Gamer and software developer",
    status: "busy",
    lastSeen: "30m ago",
    messages: [
      { from: "u1", to: "u3", message: "Let's play COD!", timestamp: "45m ago" }
    ],
    contacts: ["u1", "u2", "u6"],
    groups: ["g2", "g3"],
    blockedUsers: ["u7"],
    pinnedChats: ["u6"],
    archivedChats: ["u2"],
    callHistory: []
  },
  {
    id: "u4",
    name: "Emily Johnson",
    username: "emily_johnson",
    email: "emilyjohnson@example.com",
    phone: "+6677889900",
    profilePic: "https://randomuser.me/api/portraits/women/4.jpg",
    bio: "Nature photographer and explorer",
    status: "away",
    lastSeen: "5h ago",
    messages: [
      { from: "u5", to: "u4", message: "Check out this landscape!", timestamp: "5h ago" }
    ],
    contacts: ["u2", "u5"],
    groups: ["g1"],
    blockedUsers: [],
    pinnedChats: ["u2"],
    archivedChats: [],
    callHistory: [
      { with: "u2", type: "voice", duration: "05:45", timestamp: "3 days ago" }
    ]
  },
  {
    id: "u5",
    name: "Robert Williams",
    username: "robert_williams",
    email: "robertwilliams@example.com",
    phone: "+5544332211",
    profilePic: "https://randomuser.me/api/portraits/men/5.jpg",
    bio: "Movie buff and aspiring director",
    status: "online",
    lastSeen: "active now",
    messages: [
      { from: "u3", to: "u5", message: "Did you watch that new movie?", timestamp: "15m ago" }
    ],
    contacts: ["u1", "u3", "u6"],
    groups: ["g2"],
    blockedUsers: ["u1"],
    pinnedChats: ["u4"],
    archivedChats: [],
    callHistory: [
      { with: "u3", type: "video", duration: "15:20", timestamp: "1 week ago" }
    ]
  },
  {
    id: "u6",
    name: "Sophia Martinez",
    username: "sophia_martinez",
    email: "sophiamartinez@example.com",
    phone: "+9988776655",
    profilePic: "https://randomuser.me/api/portraits/women/6.jpg",
    bio: "AI researcher and bookworm",
    status: "offline",
    lastSeen: "yesterday",
    messages: [
      { from: "u2", to: "u6", message: "Let's catch up soon!", timestamp: "yesterday" }
    ],
    contacts: ["u1", "u3"],
    groups: ["g3"],
    blockedUsers: [],
    pinnedChats: [],
    archivedChats: ["u5"],
    callHistory: [
      { with: "u5", type: "voice", duration: "08:45", timestamp: "4 days ago" }
    ]
  },
  {
    id: "u7",
    name: "Daniel Carter",
    username: "daniel_carter",
    email: "danielcarter@example.com",
    phone: "+7766554433",
    profilePic: "https://randomuser.me/api/portraits/men/7.jpg",
    bio: "Entrepreneur and fitness enthusiast",
    status: "online",
    lastSeen: "3h ago",
    messages: [
      { from: "u6", to: "u7", message: "Any updates on the project?", timestamp: "4h ago" }
    ],
    contacts: ["u4", "u6"],
    groups: ["g1", "g3"],
    blockedUsers: ["u3"],
    pinnedChats: ["u1"],
    archivedChats: [],
    callHistory: []
  }
];
