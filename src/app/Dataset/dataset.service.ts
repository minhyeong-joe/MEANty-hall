import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Dataset } from './dataset';

@Injectable()
export class DatasetService {

  constructor(private http: Http) {}

  private endPoint = '/dataset';

  private headers = new Headers({
    'Content-Type': 'application/json'
  })

  private options = new RequestOptions({
    headers: this.headers
  })

  getDataset():Observable<{success:boolean, data:Dataset[]}> {
    return this.http.get(this.endPoint)
    .map((res:Response) => res.json())
    .catch((error:any) => Observable.throw(error.json() || 'Server error'));
  }

  addDataset(data: Dataset):Observable<{success:boolean, newData:Dataset}> {
    let dataJson = JSON.stringify(data);
    return this.http.post(this.endPoint, dataJson, this.options)
    .map((res:Response) => res.json())
    .catch((err:any) => Observable.throw(err.json() || 'Server Error'));
  }

}
