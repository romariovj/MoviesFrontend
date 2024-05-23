import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptorInterceptor: HttpInterceptorFn = (req, next) => {
  
  const authToken = localStorage.getItem('token');

  //Clonar el request 
  const clonedRequest = req.clone({
    setHeaders: {
      Authorization: `Bearer ${authToken}`
    }
  });
  
  //Continuar
  return next(clonedRequest);
};
