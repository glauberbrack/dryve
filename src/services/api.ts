import axios from 'axios';
import { ICar } from '../utils/interfaces/ICar';

export const getAllVehicles = () =>
  axios.get<ICar[]>('http://www.mocky.io/v2/5eb553df31000060006994a8');
