const fans = [
  { fanId: "F1001", name: "Ahmad", country: "Jordan", platform: "TV", matches: 12 },
  { fanId: "F1002", name: "Sara", country: "Jordan", platform: "Mobile App", matches: 8 },
  { fanId: "F1003", name: "Omar", country: "Saudi Arabia", platform: "TV", matches: 15 },
  { fanId: "F1004", name: "Lina", country: "Jordan", platform: "Website", matches: 6 },
  { fanId: "F1005", name: "Khaled", country: "UAE", platform: "TV", matches: 11 },
  { fanId: "F1006", name: "Noor", country: "Jordan", platform: "Mobile App", matches: 4 },
  { fanId: "F1007", name: "Yazan", country: "Qatar", platform: "TV", matches: 14 },
  { fanId: "F1008", name: "Dana", country: "Jordan", platform: "Website", matches: 7 },
  { fanId: "F1009", name: "Ali", country: "Saudi Arabia", platform: "TV", matches: 16 },
  { fanId: "F1010", name: "Rana", country: "UAE", platform: "Mobile App", matches: 5 },
  { fanId: "F1011", name: "Mohammad", country: "Jordan", platform: "TV", matches: 10 },
  { fanId: "F1012", name: "Huda", country: "Qatar", platform: "Website", matches: 9 },
  { fanId: "F1013", name: "Tareq", country: "Jordan", platform: "Mobile App", matches: 13 },
  { fanId: "F1014", name: "Reem", country: "Saudi Arabia", platform: "TV", matches: 3 },
  { fanId: "F1015", name: "Sameer", country: "Jordan", platform: "Website", matches: 8 },
  { fanId: "F1016", name: "Aya", country: "UAE", platform: "Mobile App", matches: 11 },
  { fanId: "F1017", name: "Fadi", country: "Jordan", platform: "TV", matches: 17 },
  { fanId: "F1018", name: "Maysa", country: "Qatar", platform: "TV", matches: 6 },
  { fanId: "F1019", name: "Basel", country: "Jordan", platform: "Mobile App", matches: 12 },
  { fanId: "F1020", name: "Rania", country: "Saudi Arabia", platform: "Website", matches: 5 },
  { fanId: "F1021", name: "Zaid", country: "Jordan", platform: "TV", matches: 14 },
  { fanId: "F1022", name: "Salma", country: "UAE", platform: "Mobile App", matches: 7 },
  { fanId: "F1023", name: "Anas", country: "Qatar", platform: "TV", matches: 13 },
  { fanId: "F1024", name: "Dima", country: "Jordan", platform: "Website", matches: 9 },
  { fanId: "F1025", name: "Hamza", country: "Jordan", platform: "Mobile App", matches: 11 },
  { fanId: "F1026", name: "Farah", country: "Saudi Arabia", platform: "TV", matches: 4 },
  { fanId: "F1027", name: "Youssef", country: "Jordan", platform: "TV", matches: 18 },
  { fanId: "F1028", name: "Lama", country: "UAE", platform: "Website", matches: 8 },
  { fanId: "F1029", name: "Ibrahim", country: "Qatar", platform: "Mobile App", matches: 15 },
  { fanId: "F1030", name: "Tala", country: "Jordan", platform: "TV", matches: 6 },
  { fanId: "F1031", name: "Mahmoud", country: "Jordan", platform: "Website", matches: 10 },
  { fanId: "F1032", name: "Haneen", country: "Saudi Arabia", platform: "Mobile App", matches: 7 },
  { fanId: "F1033", name: "Ayman", country: "Jordan", platform: "TV", matches: 12 },
  { fanId: "F1034", name: "Heba", country: "UAE", platform: "Website", matches: 5 },
  { fanId: "F1035", name: "Laith", country: "Qatar", platform: "TV", matches: 16 },
  { fanId: "F1036", name: "Nadeen", country: "Jordan", platform: "Mobile App", matches: 8 },
  { fanId: "F1037", name: "Majd", country: "Saudi Arabia", platform: "TV", matches: 14 },
  { fanId: "F1038", name: "Shahd", country: "Jordan", platform: "Website", matches: 9 },
  { fanId: "F1039", name: "Adam", country: "UAE", platform: "Mobile App", matches: 13 },
  { fanId: "F1040", name: "Jana", country: "Jordan", platform: "TV", matches: 11 }
];

// Pivot Table حسب الدولة
const byCountry = {};
fans.forEach(fan => {
  byCountry[fan.country] = (byCountry[fan.country] || 0) + 1;
});

console.log(byCountry);

// Pivot Table حسب المنصة
const byPlatform = {};
fans.forEach(fan => {
  byPlatform[fan.platform] = (byPlatform[fan.platform] || 0) + 1;
});

console.log(byPlatform);

// VLOOKUP
const fan1025 = fans.find(f => f.fanId === "F1025");
const fan1038 = fans.find(f => f.fanId === "F1038");

console.log(fan1025);
console.log(fan1038);