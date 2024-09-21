exports.getFakeData = (org) => {
  if (org === '') {
    return { username: 'NoName', appname: 'Blank App', org: 'Organisation', logo: 'fake image' };
  } else if (org === 'Organisation') {
    return { username: 'Boss', appname: 'Hugo', org: 'Parfum', logo: '' };
  }
};
