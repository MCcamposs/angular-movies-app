import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class UsuarioService {
    constructor (private firebase:AngularFirestore) { }

    ListarUsuarios():Observable<any> /* lo que nos retorna es */
    {
      /* get y snaphotChanges hacen los mismo */
      /* Pero el segundo va actualizando a tiempo real */
      /* Estar todo el tiempo observando por si hay cambios */
      return this.firebase.collection('nombres').snapshotChanges();
    }
}
