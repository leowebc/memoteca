import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Pensamento} from "../pensamento";
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class PensamentoService {

    private readonly API  = 'http://localhost:3000/pensamentos'

    constructor(private http: HttpClient) { }




}
