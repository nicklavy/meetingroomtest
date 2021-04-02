// expose our config directly to our application using module.exports
module.exports = {
  // this user MUST have full access to all the room accounts
  'exchange' : {
    'username'  : process.env.USERNAME || 'svc_OneLanRCM@horizonpharma.onmicrosoft.com',
    'password'  : process.env.PASSWORD || 'G@dhOCTPqJ2^',
    'uri'       : 'https://outlook.office365.com/EWS/Exchange.asmx'
  },
  // Ex: CONTOSO.COM, Contoso.com, Contoso.co.uk, etc.
  'domain' : process.env.DOMAIN || 'horizonpharma.com'
};
