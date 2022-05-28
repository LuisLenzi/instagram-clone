export async function handleStoryData() {
  return [
    {
      id: 1,
      image: require("../assets/stories/1.png"),
      name: "Story",
    },
    {
      id: 2,
      image: require("../assets/stories/2.png"),
      name: "Guilherme",
    },
    {
      id: 3,
      image: require("../assets/stories/3.png"),
      name: "Hugo",
    },
    {
      id: 4,
      image: require("../assets/stories/4.png"),
      name: "Victor",
    },
    {
      id: 5,
      image: require("../assets/stories/5.png"),
      name: "Unis",
    },
  ];
}

export async function handlePostData() {
  return [
    {
      id: 1,
      location: "Monsenhor Paulo",
      image: require("../assets/posts/1.png"),
      description: "🏀",
      profile: {
        id: 1,
        image: require("../assets/stories/1.png"),
        name: "Luís Lenzi",
      },
    },
    {
      id: 2,
      location: "Alfenas",
      image: require("../assets/posts/2.png"),
      description: "👔",
      profile: {
        id: 2,
        image: require("../assets/stories/2.png"),
        name: "Guilherme Cruz",
      },
    },
    {
      id: 3,
      location: "Belo Horizonte",
      image: require("../assets/posts/3.png"),
      description: "❤️",
      profile: {
        id: 3,
        image: require("../assets/stories/3.png"),
        name: "Hugo Massote",
      },
    },
    {
      id: 4,
      location: "Monsenhor Paulo",
      image: require("../assets/posts/4.png"),
      description: "😁",
      profile: {
        id: 4,
        image: require("../assets/stories/4.png"),
        name: "Victor Bento",
      },
    },
    {
      id: 5,
      location: "Varginha",
      image: require("../assets/posts/5.png"),
      description: "Viu como aqui no Unis tudo é diferente? Você tem benefícios até quando indica seu amigo pra estudar aqui.",
      profile: {
        id: 5,
        image: require("../assets/stories/5.png"),
        name: "Grupo Unis",
      },
    },
  ];
}
