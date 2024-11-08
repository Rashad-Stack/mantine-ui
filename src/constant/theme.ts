import { createTheme, MantineColorsTuple } from "@mantine/core";

const orange: MantineColorsTuple = [
  '#fff8e1',
  '#ffefcb',
  '#ffdd9a',
  '#ffca64',
  '#ffba38',
  '#ffb01b',
  '#ffab09',
  '#e39500',
  '#cb8400',
  '#b07100'
];

export const theme = createTheme({
  colors: {
    orange,
  }
});