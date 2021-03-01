export const setSessionValue = (name, value) => {
  if (typeof window !== 'undefined') {
    window.sessionStorage.setItem(name, value);
  }
  return undefined;
};

export const setSessionObjectValue = (name, value) => {
  if (typeof window !== 'undefined' && typeof value === 'object') {
    const objectStringfied = JSON.stringify(value);
    window.sessionStorage.setItem(name, objectStringfied);
  }
  return undefined;
};

export const getSessionValue = (name) => {
  if (typeof window !== 'undefined') {
    return window.sessionStorage.getItem(name);
  }
  return undefined;
};

export const getSessionObjectValue = (name) => {
  if (typeof window !== 'undefined') {
    return JSON.parse(window.sessionStorage.getItem(name));
  }

  return undefined;
};

export const clearSession = () => {
  if (typeof window !== 'undefined') {
    return window.sessionStorage.clear();
  }
  return undefined;
};

export const getOfferObject = () => {
  const selectedOffer = getSessionObjectValue('selectedOffer');
  if (typeof window === 'undefined' || !selectedOffer) {
    return {};
  }

  return {
    offerId: selectedOffer._id,
    offerTitle: selectedOffer.title,
    offerName: selectedOffer.name,
    offerValue: selectedOffer.coupon.value,
    activationMessage: selectedOffer.activationMessage,
    tags: selectedOffer.tags,
    companyId: selectedOffer.company._id,
    companyName: selectedOffer.company.name,
    companySocialName: selectedOffer.company.socialName,
    finder: selectedOffer.company.finder,
    experienceName: selectedOffer.company.experience,
    city: selectedOffer.company.city,
    state: selectedOffer.company.state,
    district: selectedOffer.company.neighborhood,
    offerRewardValue: selectedOffer.reward.value
  };
};

export const setChannel = (name) => {
  if (typeof window !== 'undefined') {
    if (name) {
      window.sessionStorage.setItem('channel', name);
    } else {
      window.sessionStorage.removeItem('channel');
    }
  }

  return undefined;
};

export const getChannel = () => {
  if (typeof window !== 'undefined') {
    return window.sessionStorage.getItem('channel');
  }
  return undefined;
};

export const clearChannel = () => {
  if (typeof window !== 'undefined') {
    return window.sessionStorage.removeItem('channel');
  }
  return undefined;
};
