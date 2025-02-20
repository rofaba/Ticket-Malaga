const concertsExt = [
    { id: 1, name: "Coldplay", description: "Música en vivo", date: "2025-03-10", location: "Madrid", price: 50, src:"https://picsum.photos/200" },
    { id: 2, name: "Metallica", description: "Heavy Metal", date: "2025-04-05", location: "Barcelona", price: 80, src:"https://picsum.photos/200" },
    { id: 3, name: "Dua Lipa", description: "Pop internacional", date: "2025-05-20", location: "Sevilla", price: 60, src:"https://picsum.photos/200" },
    { id: 4, name: "Bad Bunny", description: "Reggaetón y trap", date: "2025-06-15", location: "Valencia", price: 90, src:"https://picsum.photos/200" },
    { id: 5, name: "The Weeknd", description: "R&B y pop", date: "2025-07-10", location: "Bilbao", price: 75, src:"https://picsum.photos/200" },
    { id: 6, name: "Rosalía", description: "Flamenco fusión", date: "2025-08-05", location: "Granada", price: 65, src:"https://picsum.photos/200" },
    { id: 7, name: "Imagine Dragons", description: "Rock alternativo", date: "2025-09-12", location: "Zaragoza", price: 55, src:"https://picsum.photos/200" },
    { id: 8, name: "Taylor Swift", description: "Pop y country", date: "2025-10-02", location: "Madrid", price: 85, src:"https://picsum.photos/200" },
    { id: 9, name: "Ed Sheeran", description: "Pop acústico", date: "2025-11-18", location: "Barcelona", price: 70, src:"https://picsum.photos/200" },
    { id: 10, name: "Beyoncé", description: "R&B y pop", date: "2025-12-22", location: "Málaga", price: 95, src:"https://picsum.photos/200" },
    { id: 11, name: "Harry Styles", description: "Pop y rock", date: "2026-01-08", location: "Valencia", price: 78, src: "https://picsum.photos/200" },
    { id: 12, name: "AC/DC", description: "Hard Rock", date: "2026-02-25", location: "Bilbao", price: 100, src:"https://picsum.photos/200" },
    { id: 13, name: "Karol G", description: "Reggaetón y urbano", date: "2026-03-17", location: "Sevilla", price: 68, src:"https://picsum.photos/200" },
    { id: 14, name: "Shakira", description: "Pop latino", date: "2026-04-05", location: "Madrid", price: 80, src:"https://picsum.photos/200" },
    { id: 15, name: "Red Hot Chili", description: "Rock alternativo", date: "2026-05-14", location: "Barcelona", price: 85, src:"https://picsum.photos/200" },
    { id: 16, name: "Maluma", description: "Reggaetón y pop", date: "2026-06-20", location: "Zaragoza", price: 70, src:"https://picsum.photos/200" },
];
  


const concerts = [
  { 
    id: 1, 
    event_name: "Coldplay", 
    description: "Música en hfhfhf hfhfh hfhfhf vivo", 
    dateTime: "2025-03-10T20:00:00", 
    place: "Madrid", 
    price: 80, 
    img: "https://picsum.photos/id/1018/200/200",
    stock: 6
  },
  { 
    id: 2, 
    event_name: "Metallica", 
    description: "Heavy Metal", 
    dateTime: "2025-04-05T21:00:00", 
    place: "Barcelona", 
    price: 40, 
    img: "https://picsum.photos/id/1025/200/200",
    stock:6
  },
  { 
    id: 3, 
    event_name: "Dua Lipa", 
    description: "Pop internacional", 
    dateTime: "2025-05-20T19:30:00", 
    place: "Sevilla", 
    price: 60, 
    img: "https://picsum.photos/id/1031/200/200",
    stock:6
  },
  { 
    id: 4, 
    event_name: "Bad Bunny", 
    description: "Reggaetón y trap", 
    dateTime: "2025-06-15T22:00:00", 
    place: "Valencia", 
    price: 90, 
    img: "https://picsum.photos/id/1042/200/200",
    stock: 6
  },
  { 
    id: 5, 
    event_name: "The Weeknd", 
    description: "R&B y pop", 
    dateTime: "2025-07-10T20:30:00", 
    place: "Bilbao", 
    price: 75, 
    img: "https://picsum.photos/id/1050/200/200",
    stock:6
  },
  { 
    id: 6, 
    event_name: "Rosalía", 
    description: "Flamenco fusión", 
    dateTime: "2025-08-05T21:00:00", 
    place: "Granada", 
    price: 65, 
    img: "https://picsum.photos/id/1060/200/200",
    stock:6
  },
  { 
    id: 7, 
    event_name: "Imagine Dragons", 
    description: "Rock alternativo", 
    dateTime: "2025-09-12T19:00:00", 
    place: "Zaragoza", 
    price: 55, 
    img: "https://picsum.photos/id/1074/200/200",
    stock:6
  },
  { 
    id: 8, 
    event_name: "Taylor Swift", 
    description: "Pop y country",
    dateTime: "2025-10-02T20:00:00", 
    place: "Madrid", 
    price: 85, 
    img: "https://picsum.photos/id/1080/200/200",
    stock: 6
  },
  { 
    id: 9, 
    event_name: "BTS", 
    description: "K-pop", 
    dateTime: "2025-11-15T18:30:00", 
    place: "Barcelona", 
    price: 70, 
    img: "https://picsum.photos/id/1021/200/200",
    stock: 6
  },
  { 
    id: 10, 
    event_name: "Adele", 
    description: "Soulful pop", 
    dateTime: "2025-12-01T21:00:00", 
    place: "Málaga", 
    price: 95, 
    img: "https://picsum.photos/id/1022/200/200",
    stock:6
  },
  { 
    id: 11, 
    event_name: "Ed Sheeran", 
    description: "Acoustic pop", 
    dateTime: "2025-11-30T19:45:00", 
    place: "Valencia", 
    price: 65, 
    img: "https://picsum.photos/id/1023/200/200",
    stock:6
  },
  { 
    id: 12, 
    event_name: "Maroon 5", 
    description: "Pop rock", 
    dateTime: "2025-12-10T20:15:00", 
    place: "Bilbao", 
    price: 55, 
    img: "https://picsum.photos/id/1024/200/200",
    stock: 6
  },
  { 
    id: 13, 
    event_name: "Shakira", 
    description: "Latin pop", 
    dateTime: "2025-11-20T21:30:00", 
    place: "Granada", 
    price: 85, 
    img: "https://picsum.photos/id/1025/200/200",
    stock:6
  },
  { 
    id: 14, 
    event_name: "Bruno Mars", 
    description: "Funk y pop", 
    dateTime: "2025-12-15T20:00:00", 
    place: "Málaga", 
    price: 80, 
    img: "https://picsum.photos/id/1026/200/200",
    stock: 6
  },
  { 
    id: 15, 
    event_name: "Linkin Park", 
    description: "Nu metal", 
    dateTime: "2025-10-30T19:30:00", 
    place: "Madrid", 
    price: 60, 
    img: "https://picsum.photos/id/1027/200/200",
    stock: 6
  },
  { 
    id: 16, 
    event_name: "Queen", 
    description: "Clásicos del rock", 
    dateTime: "2025-12-20T22:00:00", 
    place: "Barcelona", 
    price: 90, 
    img: "https://picsum.photos/id/1028/200/200",
    stock: 6
  },
  {
    id: 17,
    event_name: "Hans Zimmer Live",
    description: "Gran espectáculo sinfónico",
    dateTime: "2025-06-10T19:30:00",
    place: "Sevilla",
    price: 85,
    img: "https://picsum.photos/id/1052/200/200",
    stock: 6
},
{
    id: 18,
    event_name: "Daft Punk Tribute",
    description: "Tremendo show electrónico lkhlkhlkhlkhlkhlkhlkhlkhlkhlkhlh",
    dateTime: "2025-08-22T23:00:00",
    place: "Bilbao",
    price: 75,
    img: "https://picsum.photos/id/1068/200/200",
    stock: 6
}

];

export default concerts;