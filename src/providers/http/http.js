var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
export var BASE_PATH = 'http://i2solutions.herokuapp.com';
// http://localhost:3000 http://i2solutions.herokuapp.com
var HttpProvider = /** @class */ (function () {
    function HttpProvider(http) {
        this.http = http;
        this.path = 'https://randomuser.me/api/?results=25';
        this.todosPuestos = BASE_PATH + '/api/movil/puesto_trabajo/area_trabajo/';
        this.puesto = BASE_PATH + '/api/movil/puesto_trabajo/';
        this.novedadesPath = BASE_PATH + '/api/movil/novedad/puesto_trabajo/';
    }
    HttpProvider.prototype.uploadImageToImgur = function (imagen) {
        var data = { image: imagen };
        var headers = new Headers({ 'Authorization': 'Client-ID d40866b7eff4bd0' });
        var options = new RequestOptions({ headers: headers });
        var url = 'https://api.imgur.com/3/image';
        return this.http
            .post(url, data, options)
            .map(function (res) { return res.json(); }, function (err) {
            console.log(err);
        })
            .toPromise();
    };
    HttpProvider.prototype.agregarNovedad = function (puestoId, descripcion, prioridad, urlFoto) {
        var data = { puesto_trabajo_id: puestoId, descripcion: descripcion, prioridad: prioridad, foto_url: urlFoto };
        var url = BASE_PATH + '/api/movil/novedad';
        return this.http
            .post(url, data)
            .map(function (res) { return res.json(); }, function (err) {
            console.error(err);
        })
            .toPromise();
    };
    HttpProvider.prototype.marcarComoAtendida = function (novedadId, puestoId, descripcion) {
        var data = { atendida: true, descripcionAtendida: descripcion };
        var url = BASE_PATH + '/api/movil/novedad/' + novedadId + '/puesto_trabajo/' + puestoId;
        return this.http
            .post(url, data)
            .map(function (res) { return res.json(); }, function (err) {
            console.error(err);
        })
            .toPromise();
    };
    HttpProvider.prototype.obtenerPuestoDeTrabajoDeArea = function (idArea) {
        return this.http
            .get(this.todosPuestos.concat(idArea))
            .map(function (res) { return res.json(); }, function (err) {
            console.log(err);
        })
            .toPromise();
    };
    HttpProvider.prototype.obtenerPuestoDeTrabajo = function (idPuesto) {
        return this.http
            .get(this.puesto.concat(idPuesto))
            .map(function (res) { return res.json(); }, function (err) {
            console.log(err);
        })
            .toPromise();
    };
    HttpProvider.prototype.obetenerNovedadesSinAtender = function (idPuesto) {
        return this.http
            .get(this.novedadesPath.concat(idPuesto))
            .map(function (res) { return res.json(); }, function (err) {
            console.log(err);
        })
            .toPromise();
    };
    HttpProvider.prototype.cargarDatos = function (areaId, puestoId) {
        return this.http
            .get(BASE_PATH + "/api/movil/area/" + areaId + "/puesto/" + puestoId)
            .map(function (res) { return res.json(); }, function (err) {
            console.log(err);
        }).toPromise();
    };
    HttpProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [Http])
    ], HttpProvider);
    return HttpProvider;
}());
export { HttpProvider };
//# sourceMappingURL=http.js.map