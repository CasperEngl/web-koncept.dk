const spacing = {
  none: 'none',
  1: '0.25rem',
  '-1': '-0.25rem',
  2: '0.5rem',
  '-2': '-0.5rem',
  3: '0.75rem',
  '-3': '-0.75rem',
  4: '1rem',
  '-4': '-1rem',
  5: '1.25rem',
  '-5': '-1.25rem',
  6: '1.5rem',
  '-6': '-1.5rem',
  7: '1.75rem',
  '-7': '-1.75rem',
  8: '2rem',
  '-8': '-2rem',
  10: '2.5rem',
  '-10': '-2.5rem',
  11: '2.75rem',
  '-11': '-2.75rem',
  12: '3rem',
  '-12': '-3rem',
  14: '3.5rem',
  '-14': '-3.5rem',
  16: '4rem',
  '-16': '-4rem',
  18: '4.5rem',
  '-18': '-4.5rem',
  20: '5rem',
  '-20': '-5rem',
  22: '5.5rem',
  '-22': '-5.5rem',
  24: '6rem',
  '-24': '-6rem',
  25: '6.25rem',
  '-25': '-6.25rem',
  26: '6.5rem',
  '-26': '-6.5rem',
  28: '7rem',
  '-28': '-7rem',
  30: '7.5rem',
  '-30': '-7.5rem',
  32: '8rem',
  '-32': '-8rem',
  36: '9rem',
  '-36': '-9rem',
  40: '10rem',
  '-40': '-10rem',
  44: '11rem',
  '-44': '-11rem',
  48: '12rem',
  '-48': '-12rem',
  52: '13rem',
  '-52': '-13rem',
  56: '14rem',
  '-56': '-14rem',
  60: '15rem',
  '-60': '-15rem',
  64: '16rem',
  '-64': '-16rem',
  66: '16.5rem',
  '-66': '-16.5rem',
  72: '18rem',
  '-72': '-18rem',
  80: '20rem',
  '-80': '-20rem',
  88: '22rem',
  '-88': '-22rem',
  96: '24rem',
  '-96': '-24rem',
  xs: '20rem',
  sm: '24rem',
  md: '28rem',
  lg: '32rem',
  xl: '36rem',
  '2xl': '42rem',
  '3xl': '48rem',
  '4xl': '56rem',
  '5xl': '64rem',
  '6xl': '72rem',
  '8xl': '96rem',
  '10xl': '120rem',
}

module.exports = {
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    extend: {
      negativeMargin: spacing,
      margin: spacing,
      padding: spacing,
      width: {
        row: 'calc(100% + 1.5rem)',
        'row-tight': 'calc(100% + 0.5rem)',
        column: 'calc(100% + 1.5rem)',
        'column-tight': 'calc(100% + 0.5rem)',
      },
      maxWidth: spacing,
      minWidth: spacing,
      maxHeight: spacing,
      minHeight: spacing,
    },
  },
  variants: {},
  plugins: [
    require('tailwindcss-transitions')()
  ],
}
