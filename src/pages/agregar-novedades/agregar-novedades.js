var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { ActionSheetController, NavController, LoadingController, NavParams, ToastController } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';
import { HttpProvider } from '../../providers/http/http';
import { GlobalProvider } from '../../providers/global/global';
var AgregarNovedadesPage = /** @class */ (function () {
    function AgregarNovedadesPage(toastCtrl, navCtrl, navParams, camera, actionSheetCtrl, http, loadingCtrl, global) {
        this.toastCtrl = toastCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.camera = camera;
        this.actionSheetCtrl = actionSheetCtrl;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.global = global;
        this.image = ''; // http://img04.deviantart.net/b31c/i/2015/254/a/2/mabel_pines_render_by_pokemonlover7669-d997jl2.png
        this.imgurLink = '';
        this.prioridad = '';
        this.puestoId = navParams.get('item');
        this.isenabled = false;
    }
    AgregarNovedadesPage.prototype.presentActionSheet = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            buttons: [
                {
                    icon: 'camera',
                    text: 'Cámara',
                    handler: function () {
                        _this.getPicture();
                    }
                },
                {
                    icon: 'image',
                    text: 'Galería',
                    handler: function () {
                        _this.getPictureFromGallery();
                    }
                },
                {
                    role: 'cancel',
                    text: 'Cancelar',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        void actionSheet.present();
    };
    AgregarNovedadesPage.prototype.borrarImagen = function () {
        this.image = '';
        this.imgurLink = '';
    };
    AgregarNovedadesPage.prototype.getPicture = function () {
        var _this = this;
        var options = {
            destinationType: this.camera.DestinationType.DATA_URL,
            targetWidth: 1000,
            targetHeight: 1000,
            quality: 100
        };
        this.camera.getPicture(options)
            .then(function (imageData) {
            _this.image = "data:image/jpeg;base64," + imageData;
            var loading = _this.loadingCtrl.create({
                content: 'Por favor, espere...'
            });
            void loading.present();
            _this.http.uploadImageToImgur(imageData).then(function (res) {
                _this.imgurLink = res.data.link;
                void loading.dismiss();
            })
                .catch(function (error) {
                console.error(error);
            });
        })
            .catch(function (error) {
            console.error(error);
        });
    };
    AgregarNovedadesPage.prototype.getPictureFromGallery = function () {
        var _this = this;
        var options = {
            sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
            destinationType: this.camera.DestinationType.DATA_URL,
            targetWidth: 1000,
            targetHeight: 1000,
            quality: 100
        };
        this.camera.getPicture(options)
            .then(function (imageData) {
            _this.image = "data:image/jpeg;base64," + imageData;
            var loading = _this.loadingCtrl.create({
                content: 'Por favor, espere...'
            });
            void loading.present();
            _this.http.uploadImageToImgur(imageData).then(function (res) {
                _this.imgurLink = res.data.link;
                void loading.dismiss();
            })
                .catch(function (error) {
                console.error(error);
            });
        })
            .catch(function (error) {
            console.error(error);
        });
    };
    AgregarNovedadesPage.prototype.onChange = function (prioridad) {
        this.prioridad = prioridad;
        this.verifyButton();
    };
    AgregarNovedadesPage.prototype.crearNovedad = function () {
        var _this = this;
        if (this.isNotEmpty("" + this.global.puesto) && this.isNotEmpty(this.descripcion) && this.isNotEmpty(this.prioridad)) {
            var loading_1 = this.loadingCtrl.create({
                content: 'Por favor, espere...'
            });
            void loading_1.present();
            this.http.agregarNovedad("" + this.global.puesto, this.descripcion, this.prioridad, this.imgurLink).then(function (res) {
                _this.global.crearNovedad = true;
                void loading_1.dismiss();
                _this.descripcion = null;
                _this.prioridad = null;
                _this.global.cantidadNovedadesSinAtender = _this.global.cantidadNovedadesSinAtender + 1;
                _this.borrarImagen();
                _this.global.novedadesSinAtender.push(res.datos);
                _this.presentToast('NOVEDAD CREADA CORRECTAMENTE');
            })
                .catch(function (error) {
                console.error(error);
            });
        }
        else {
            alert('No se ha podido crear la novedad. Por favor llene los campos faltantes.');
        }
    };
    AgregarNovedadesPage.prototype.cancelar = function () {
        void this.navCtrl.pop();
    };
    AgregarNovedadesPage.prototype.isNotEmpty = function (valor) {
        if (!valor || valor === '') {
            return false;
        }
        else {
            return true;
        }
    };
    AgregarNovedadesPage.prototype.verifyButton = function () {
        console.log(this.descripcion);
        if (this.isNotEmpty(this.descripcion) && this.isNotEmpty(this.prioridad)) {
            this.isenabled = true;
            console.log('true');
        }
        else {
            this.isenabled = false;
        }
    };
    AgregarNovedadesPage.prototype.presentToast = function (mensaje) {
        var toast = this.toastCtrl.create({
            message: mensaje,
            duration: 3000,
            position: 'middle'
        });
        void toast.present();
    };
    AgregarNovedadesPage = __decorate([
        Component({
            selector: 'page-agregar-novedades',
            templateUrl: 'agregar-novedades.html'
        }),
        __metadata("design:paramtypes", [ToastController, NavController, NavParams, Camera, ActionSheetController, HttpProvider, LoadingController, GlobalProvider])
    ], AgregarNovedadesPage);
    return AgregarNovedadesPage;
}());
export { AgregarNovedadesPage };
//# sourceMappingURL=agregar-novedades.js.map