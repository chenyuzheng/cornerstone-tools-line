import external from '../../externalModules';

const configuration = {
  iconSize: 16,
  viewBox: {
    x: 16,
    y: 16,
  },
  mousePoint: {
    x: 0,
    y: 0,
  },
  mousePointerGroupString: `
    <path stroke="ACTIVE_COLOR" fill="ACTIVE_COLOR" d="M0 16L0 0L12 14L4 10 Z"></path>
  `,
};

const setters = {
  defaultOptions: newOptions => {
    Object.assign(configuration, newOptions);
  },
};

const getters = {
  defaultOptions: () => configuration,
};

export default {
  configuration,
  getters,
  setters,
};
