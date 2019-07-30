export default [
  {
    name: "Attack",
    id: 1,
    requirements: {
      action: true,
    }
  },
  {
    name: "Cast",
    id: 2,
    requirements: {
      caster: true,

    }
  },
  {
    name: "Move",
    id: 3,
    requirements: {
      movement: true,
      immobile: false,
    }
  },
  {
    name: "Dash",
    id: 4,
    requirements: {
      action: true,
      immobile: false,
    }
  },
  {
    name: "Use",
    id: 5,
    requirements: {
      action: true,
      items: true,
    }
  },
  {
    name: "Ready",
    id: 6,
    requirements: {
      action: true,
      reaction: true,
    }
  },
  {
    name: "Dodge",
    id: 7,
    requirements: {
      action: true,
    }
  },
  {
    name: "Check",
    id: 8,
    requirements: {
      action: true,
    }
  },
  {
    name: "Help",
    id: 9,
    requirements: {
      action: true,
      immobile: false,
    }
  },
]