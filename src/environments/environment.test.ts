const href = document.location.origin;

export const environment = {
  production:     true,
  debugLogging:   true,
  apiKey:         'to-be-replaced',
  caseIdentifier: 'bhopmaps-v1',


  // API config
  apiUrlBasic:       href,
  apiUrl:            href + '/Api/V1/'
};
