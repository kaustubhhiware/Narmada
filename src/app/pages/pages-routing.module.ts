import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { CompletedComponent } from './completed/completed.component';
import { NewComponent } from './new/new.component';
import { SavitrComponent } from './savitr/savitr.component';
import { ManualComponent } from './manual/manual.component';

const routes: Routes = [{
	path: '',
	component: PagesComponent,
	children: [{
		path: 'home',
		component: HomeComponent,
	}, {
		path: 'completed',
		component: CompletedComponent,
	}, {
		path: 'new',
		component: NewComponent,
	}, {
		path: 'savitr',
		component: SavitrComponent,
	}, {
		path: 'manual',
		component: ManualComponent,
	}, {
		path: 'dashboard',
		component: ECommerceComponent,
	}, {
		path: 'iot-dashboard',
		component: DashboardComponent,
	}, {
		path: 'ui-features',
		loadChildren: './ui-features/ui-features.module#UiFeaturesModule',
	}, {
		path: 'components',
		loadChildren: './components/components.module#ComponentsModule',
	}, {
		path: 'maps',
		loadChildren: './maps/maps.module#MapsModule',
	}, {
		path: 'charts',
		loadChildren: './charts/charts.module#ChartsModule',
	}, {
		path: 'editors',
		loadChildren: './editors/editors.module#EditorsModule',
	}, {
		path: 'forms',
		loadChildren: './forms/forms.module#FormsModule',
	}, {
		path: 'tables',
		loadChildren: './tables/tables.module#TablesModule',
	}, {
		path: 'miscellaneous',
		loadChildren: './miscellaneous/miscellaneous.module#MiscellaneousModule',
	}, {
		path: '',
		redirectTo: 'home',
		pathMatch: 'full',
	}, {
		path: '**',
		component: NotFoundComponent,
	}],
}];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class PagesRoutingModule {
}
