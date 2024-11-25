import { ComponentType } from "@angular/cdk/portal";
import { inject, Injectable } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Contact } from "@features/contacts/contacts.interfaces";

@Injectable({providedIn: 'root'})
export class ModalService{
    
    private readonly _dialog = inject(MatDialog);

//T= Tipo de dato que se espera recibir, CT= Tipo de Componente que se espera recibir
    openModal<CT, T = Contact>(componentRef: ComponentType<CT>, data?: T, isEditing = false):void{
        // console.log('openModal');
        const config = {data, isEditing};

        this._dialog.open(componentRef, {
            data: config,
            width: '500px', // Adjusted width
            // panelClass: 'custom-modal', // Added custom class for additional styling
            // height: '80%',
            // disableClose: true,
        });
    }


    closeModal():void{
        this._dialog.closeAll();
    }
}