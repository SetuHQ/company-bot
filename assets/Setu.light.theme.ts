import { lighten, darken, rgba, transparentize } from 'polished';
import { defaultColours } from 'fictoan-react';

import { setuColours } from './setuColours';

export const SetuLightTheme = {
  themeName: 'Light',

  //  TEXT  /////////////////////////////////////////////////////////////////
  text: {
    font: {
      sans: 'IBM Plex Sans, sans-serif',
      mono: 'IBM Plex Mono, monospace',
      serif: 'IBM Plex Serif, serif',
    },
    paras: {
      font: 'IBM Plex Sans , sans-serif',
      color: `${lighten(0.16, setuColours.murkyNight)}`,
      lineHeight: 1.44,
      size: 0.96,
      subtext: defaultColours.slate80,
    },
    headings: {
      font: 'IBM Plex Sans , sans-serif',
      weight: 600,
      lineHeight: 1.2,
      color: setuColours.murkyNight,
      multiplier: 1.16,
    },
    links: {
      default: {
        color: defaultColours.blue90,
      },
      onHover: {
        color: defaultColours.blue60,
      },
    },
    selection: {
      bg: setuColours.flashTurk,
      text: setuColours.murkyNight,
    },
    code: {
      inline: {
        bg: `${lighten(0.36, setuColours.flashTurk)}`,
        text: setuColours.deepPurple,
        scale: 80,
      },
      block: {
        bg: setuColours.pearlyCoke,
        text: defaultColours.grey,
      },
      prism: {
        tokens: {
          number: defaultColours.green80,
          boolean: defaultColours.green,
          property: `${lighten(0.4, setuColours.deepPurple)}`,
        },
        languages: {
          json: {
            tokens: {
              string: defaultColours.red80,
            },
          },
        },
      },
    },
  },

  //  CARD  /////////////////////////////////////////////////////////////////
  card: {
    bg: defaultColours.white,
    border: defaultColours.slate20,
    borderRadius: '8px',
  },

  //  FORM  ////////////////////////////////////////////////////////////////
  inputField: {
    default: {
      bg: defaultColours.white,
      border: defaultColours.slate40,
      label: setuColours.murkyNight,
      text: setuColours.murkyNight,
    },
    onFocus: {
      bg: defaultColours.white,
      border: setuColours.flashTurk,
      text: setuColours.murkyNight,
      helpText: setuColours.murkyNight,
    },
    isValid: {
      bg: defaultColours.white,
      border: defaultColours.green80,
      label: setuColours.murkyNight,
    },
    isInvalid: {
      bg: defaultColours.red10,
      border: defaultColours.red80,
      label: defaultColours.red,
      helpText: defaultColours.red,
    },
    isReadOnly: {
      bg: defaultColours.grey50,
      border: defaultColours.grey50,
      label: setuColours.murkyNight,
    },
    required: {
      text: defaultColours.red,
    },
    icons: {
      default: {
        fill: defaultColours.slate30,
      },
      onFocus: {
        fill: setuColours.flashTurk,
      },
      isValid: {
        bg: defaultColours.grey50,
        border: defaultColours.red30,
      },
    },
  },

  select: {
    chevron: setuColours.flashTurk,
  },

  //  BUTTON  ///////////////////////////////////////////////////////////////
  button: {
    primary: {
      default: {
        bg: setuColours.flashTurk,
        border: setuColours.flashTurk,
        text: defaultColours.white,
        borderRadius: '4px',
      },
      onHover: {
        bg: `${lighten(0.08, setuColours.flashTurk)}`,
        border: `${lighten(0.08, setuColours.flashTurk)}`,
        text: defaultColours.white,
      },
      isActive: {
        bg: setuColours.flashTurk,
        border: setuColours.flashTurk,
        text: defaultColours.white,
      },
      isLoading: {
        bg: setuColours.flashTurk,
        spinnerBorder: defaultColours.white,
      },
    },
    secondary: {
      default: {
        bg: `${lighten(0.36, setuColours.flashTurk)}`,
        border: setuColours.flashTurk,
        text: setuColours.flashTurk,
        borderRadius: '4px',
      },
      onHover: {
        bg: `${lighten(0.4, setuColours.flashTurk)}`,
        border: setuColours.flashTurk,
        text: setuColours.flashTurk,
      },
      isActive: {
        bg: `${lighten(0.2, setuColours.flashTurk)}`,
        border: setuColours.flashTurk,
        text: setuColours.flashTurk,
      },
      isLoading: {
        bg: defaultColours.white,
        spinnerBorder: defaultColours.black,
      },
    },
    tertiary: {
      default: {
        border: defaultColours.transparent,
      },
      isLoading: {
        bg: defaultColours.white,
        spinnerBorder: setuColours.flashTurk,
      },
    },
  },

  //  PROGRESS BAR  /////////////////////////////////////////////////////////
  progressBar: {
    height: 8,
    bg: defaultColours.slate20,
    fill: defaultColours.green80,
  },

  //  TABLE  ////////////////////////////////////////////////////////////////
  table: {
    bg: defaultColours.white,
    text: setuColours.murkyNight,
    border: defaultColours.slate40,
    striped: {
      header: {
        bg: defaultColours.teal40,
      },
      cell: {
        bg: defaultColours.slate10,
      },
    },
    onHover: {
      bg: defaultColours.amber20,
      text: setuColours.murkyNight,
    },
  },

  //  RULE  /////////////////////////////////////////////////////////////////
  hr: {
    primary: {
      bg: `${darken(0.24, setuColours.pearlyCoke)}`,
      height: '1px',
    },
    secondary: {
      bg: `${darken(0.16, setuColours.pearlyCoke)}`,
      height: '1px',
    },
    tertiary: {
      bg: `${darken(0.08, setuColours.pearlyCoke)}`,
      height: '1px',
    },
  },

  //  INFO PANEL  ///////////////////////////////////////////////////////////
  infoPanel: {
    bg: defaultColours.white,
    border: defaultColours.slate20,
    dismissButton: {
      bg: defaultColours.white,
      color: defaultColours.slate90,
      content: '×',
    },
  },

  //  SIDEBAR  //////////////////////////////////////////////////////////////
  sidebar: {
    bg: defaultColours.white,

    isCollapsed: {
      label: {
        text: defaultColours.white,
        bg: setuColours.flashTurk,
      },
    },

    header: {
      bg: defaultColours.white,
      borderBottom: defaultColours.white,
      logoWidth: '64%',
    },

    linksWrapper: {
      icons: {
        size: '24px',
        stroked: {
          thickness: 2,
          default: {
            line: defaultColours.slate40,
          },
          onHover: {
            line: defaultColours.slate80,
          },
          isActive: {
            line: setuColours.flashTurk,
          },
        },
        filled: {
          default: {
            bg: defaultColours.slate40,
          },
          onHover: {
            bg: defaultColours.slate80,
          },
          isActive: {
            bg: defaultColours.slate,
          },
        },
      },

      links: {
        default: {
          bg: defaultColours.white,
          text: setuColours.murkyNight,
          scale: 100,
          weight: 600,
        },
        onHover: {
          bg: defaultColours.slate10,
          text: setuColours.flashTurk,
        },
        isSelected: {
          bg: defaultColours.white,
          border: setuColours.flashTurk,
          text: setuColours.flashTurk,
        },
        isActive: {
          bg: `${rgba(setuColours.flashTurk, 0.1)}`,
        },
        hasAlert: {
          bg: defaultColours.red70,
        },
      },

      subLinks: {
        header: {
          weight: 600,
        },
        default: {
          bg: defaultColours.white,
          text: `${lighten(0.24, setuColours.murkyNight)}`,
          weight: 400,
          scale: 92,
        },
        onHover: {
          bg: defaultColours.slate10,
          text: setuColours.flashTurk,
        },
        chevron: {
          border: defaultColours.slate40,
        },
      },
    },

    footer: {
      height: '32px',
      bg: defaultColours.white,
      borderTop: defaultColours.slate10,
    },
  },

  //  BREADCRUMBS  ///////////////////////////////////////////////////////////
  breadcrumbs: {
    wrapper: {
      bg: defaultColours.transparent,
    },
    item: {
      text: setuColours.flashTurk,
      separator: defaultColours.slate40,
      active: setuColours.flashTurk,
      inactive: `${lighten(0.16, setuColours.murkyNight)}`,
    },
  },

  /// ////////////////////////////////////////////////////////////////////////
  //  CUSTOM COMPONENTS  ////////////////////////////////////////////////////
  /// ////////////////////////////////////////////////////////////////////////
  DocsSidebar: {
    borderRight: defaultColours.slate20,
  },

  MobileHeader: {
    bg: defaultColours.white,
    borderBottom: defaultColours.slate20,
  },

  StickyPageHeader: {
    bg: `${transparentize(0.24, defaultColours.white)}`,
    FirefoxBg: defaultColours.white,
    borderBottom: defaultColours.slate20,
  },

  Footer: {
    bg: defaultColours.grey10,
    sectionTitle: {
      text: setuColours.flashTurk,
    },
    links: {
      text: `${lighten(0.24, setuColours.murkyNight)}`,
    },
  },

  Search: {
    Icon: {
      default: {
        stroke: defaultColours.slate60,
      },
    },
    ResultsWrapper: {
      bg: defaultColours.slate10,
    },
    ResultCard: {
      highlight: {
        bg: defaultColours.yellow50,
      },
      default: {
        bg: defaultColours.white,
      },
      isSelected: {
        bg: `${lighten(0.4, setuColours.flashTurk)}`,
        border: setuColours.flashTurk,
      },
    },
    ResultName: {
      default: {
        text: `${lighten(0.16, setuColours.murkyNight)}`,
      },
      isSelected: {
        text: `${lighten(0.16, setuColours.murkyNight)}`,
      },
    },
    ResultPath: {
      default: {
        text: defaultColours.slate60,
      },
      isSelected: {
        text: defaultColours.slate60,
      },
    },
  },

  InPageScrollLinks: {
    Link: {
      default: {
        text: defaultColours.slate80,
      },
      onHover: {
        text: `${lighten(0.16, setuColours.flashTurk)}`,
      },
      active: {
        text: setuColours.flashTurk,
      },
    },
  },

  APIReference: {
    LeftMenu: {
      bg: defaultColours.slate40,
    },
    TextContent: {},
    CodeSamples: {
      bg: setuColours.pearlyCoke,
      button: {
        bg: defaultColours.slate40,
      },
    },
  },

  CustomTable: {
    border: defaultColours.slate20,
    Header: {
      bg: setuColours.pearlyCoke,
      text: `${lighten(0.16, setuColours.murkyNight)}`,
    },
  },

  MagiCLI: {
    border: defaultColours.slate40,
    text: defaultColours.grey10,

    TitleBar: {
      bg: `${transparentize(0.08, lighten(0.16, setuColours.murkyNight))}`,
    },
  },

  SetuBot: {
    iconBg: `#C6EFF0`,
    primary: 'hsl(181,  58%,  53%)',
  },
};
