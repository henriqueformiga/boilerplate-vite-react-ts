export class Utils {

  /**
   *Function that convert object properties to QueryParams String
   * @param obj Objeto if you want convert to QueryParams
   * @returns QueryParams like a String 'id=123123&name=john
   */
  static getQueryParams(obj: any) {
    const params = [];
    for (let prop in obj) {
      const valueProp = obj[prop];
      if (obj.hasOwnProperty(prop) && (typeof valueProp === 'boolean' || valueProp)) {
        params.push(encodeURIComponent(prop) + "=" + encodeURIComponent(valueProp));
      }
    }
    return '?' + params.join("&");
  }
}
