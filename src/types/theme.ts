export type ColorShade =
    '50' | '100' | '200' | '300' | '400' | '500' |
    '600' | '700' | '800' | '900' | '950';

export type ThemeColors = {
    primary: Record<ColorShade, string>;
    secondary: Record<ColorShade, string>;
    accent: Record<ColorShade, string>;
}

export const colors: ThemeColors = {
    primary: {
        '50': '#eefcfd',
        '100': '#d3f7fa',
        '200': '#adeef4',
        '300': '#74e0ec',
        '400': '#3ccadd',
        '500': '#19abc1',
        '600': '#178aa3',
        '700': '#1a6f84',
        '800': '#1e5b6c',
        '900': '#1d4c5c',
        '950': '#0d323f',
    },
    secondary: {
        '50': '#fffaeb',
        '100': '#fff1c6',
        '200': '#ffdb70',
        '300': '#ffcc4a',
        '400': '#ffb520',
        '500': '#f99207',
        '600': '#dd6c02',
        '700': '#b74a06',
        '800': '#94380c',
        '900': '#7a2e0d',
        '950': '#461602',
    },
    accent: {
        '50': '#f6f6f6',
        '100': '#e7e7e7',
        '200': '#d1d1d1',
        '300': '#b0b0b0',
        '400': '#888888',
        '500': '#6d6d6d',
        '600': '#5d5d5d',
        '700': '#4f4f4f',
        '800': '#454545',
        '900': '#3d3d3d',
        '950': '#000000',
    }
}; 