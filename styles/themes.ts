export enum ThemeMode {
  Dark = 'Dark',
  Light = 'Light',
}

export interface Theme {
  textColor: string
  backgroundColor: string
  button: {
    color: string
    backgroundColor: string
    borderColor: string
    hoverColor: string
  }
  issue: {
    listBackgroundColor: string
    borderColor: string
    backgroundColor: string
  }
  modal: {
    backgroundColor: string
  }
  input: {
    color: string
    borderColor: string
    hoverBorderColor: string
  }
}

export interface Themes {
  [ThemeMode.Light]: Theme
  [ThemeMode.Dark]: Theme
}

const theme: Themes = {
  [ThemeMode.Light]: {
    textColor: '#333',
    backgroundColor: '#eee',
    button: {
      color: 'black',
      backgroundColor: 'white',
      borderColor: '#cacaca',
      hoverColor: '#fefefe',
    },
    issue: {
      listBackgroundColor: '#eaeaea',
      borderColor: '#ccc',
      backgroundColor: '#efefef',
    },
    modal: {
      backgroundColor: 'white',
    },
    input: {
      color: 'black',
      borderColor: '#ccc',
      hoverBorderColor: '#aaa',
    }
  },
  [ThemeMode.Dark]: {
    textColor: '#c9d1d9',
    backgroundColor: '#0d1117',
    button: {
      color: 'white',
      backgroundColor: '#21262d',
      borderColor: '#30363d',
      hoverColor: '#2d2d2d',
    },
    issue: {
      listBackgroundColor: '#060910',
      borderColor: '#30363d',
      backgroundColor: '#161b22',
    },
    modal: {
      backgroundColor: '#1e1e1e',
    },
    input: {
      color: 'white',
      borderColor: '#ccc',
      hoverBorderColor: '#eee',
    }
  }
}

export default theme
