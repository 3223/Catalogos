import { RouterModule } from '@angular/router';
import { HabitacionComponent } from './components/habitacion/habitacion.component';
import { AtraccionComponent } from './components/atraccion/atraccion.component';
import { PoliticaComponent } from './components/politica/politica.component';
import { ContactoComponent } from './components/contacto/contacto.component';



export const appRoutes = [
   
    {
        path: 'habitacion', component: HabitacionComponent,
    },
    {
        path: 'atraccion', component: AtraccionComponent,
    }, 
{
        path: 'politica', component: PoliticaComponent,
    },
    {
        path: 'contacto', component: ContactoComponent,
    }]

    export const routing = RouterModule.forRoot(appRoutes);
