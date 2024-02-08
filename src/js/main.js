import '/scss/main.scss';

// components
import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import {
  useInsightSlider,
  useTestimonialsSlider,
} from './components/home/slider.js';

useTheme();
useBurger();
useInsightSlider();
useTestimonialsSlider();
