import { HttpHandler, HttpParams } from '@angular/common/http';

export class HttpService {

  // Гененрирую http параметры исходя прислонаго обэекта и хедер для прелоадера.
  protected generateRequestOptions(params: object): {params: HttpParams, header?: HttpHandler} {
    return {
      params: this.getParams(params)
    };
  }

  private getParams(query: object): HttpParams {
    return new HttpParams({
      fromObject: this.getValidQuery(query)
    });
  }

  // Фильрую, чтобы не попали пустые параметры
  private getValidQuery(query: object): any {
    const newQuery = {};
    // Проверяю если массив, чтобы не был пустой.
    // А если примитив, то небыл undefined, null или пустой строкой.
    Object.keys(query).forEach((key: string) => {
      if ((query[key] === undefined || query[key] === null || query[key] === '')
        || (Array.isArray(query[key]) && !query[key].length)) {
        return;
      }
      newQuery[key] = query[key];
    });

    return newQuery;
  }
}
