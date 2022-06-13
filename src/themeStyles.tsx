const bodyTheme = (themeName: string) => {
  switch (themeName) {
    case "mint":
      return {
        background: "#e8eeec",
      };
      break;
    case "strawberry":
      return {
        background: "#EEE8EA",
      };
      break;
    case "chocolate":
      return {
        background: "#DDD5CC",
      };
      break;
    case "boba":
      return {
        background: "#E8DBC9",
      };
  }
};

const buttonTheme = (themeName: string) => {
  switch (themeName) {
    case "mint":
      return {
        background: "#688b7f",
      };
      break;
    case "strawberry":
      return {
        background: "#95343A",
      };
      break;
    case "chocolate":
      return {
        background: "#7C574B",
      };
      break;
    case "boba":
      return {
        background: "#B7997D",
      };
  }
};

const headerTheme = (themeName: string) => {
  switch (themeName) {
    case "mint":
      return {
        background: "#688b7f",
      };
      break;
    case "strawberry":
      return {
        background: "#95343A",
      };
      break;
    case "chocolate":
      return {
        background: "#7C574B",
      };
      break;
    case "boba":
      return {
        background: "#B7997D",
      };
  }
};

export { bodyTheme, buttonTheme, headerTheme };
