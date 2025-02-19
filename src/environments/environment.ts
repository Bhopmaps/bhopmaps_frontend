// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production:     false,
  debugLogging:   true,
  apiKey:         't123-e123-s123-t123',
  caseIdentifier: 'test',

  // API config - Json Server
  apiUrlBasic:       'http://localhost:3000',
  apiUrl:            'http://localhost:3000/Api/',
  jsonLogger:        'http://localhost:3000/Api/jsnlog.logger',
};
