app.config(['$translateProvider',
  function ($translateProvider) {

    'use strict';

    $translateProvider

    .translations('en', {
      USER_INFO: 'User info',
      UPDATE_USER_INFO: 'Update user info',
      USERNAME: 'Username',
      PASSWORD: 'Password',
      EMAIL: 'Email',
      EMAIL_ADDRESS: 'Email address',
      NAME: 'Name',
      AGE: 'Age',
      SAVE: 'Save',
      SIGNOUT: 'Sign out',
      SIGNIN: 'Sign in',
      SIGNIN_TEXT: 'Please sign in',
      USERNAME_ERROR_REQUIRED: 'Username is required.',
      PASSWORD_ERROR_REQUIRED: 'Password is required.',
      EMAIL_ERROR: 'Enter a valid email.',
      NAME_ERROR: 'Name can contain only english symbols (one or two words, each more than 3 symbols).',
      AGE_ERROR: 'Age should be from 18 to 65.',
      FORGOT_PASSWORD: 'Forgot password?',
      BACK_TO_LOGIN: 'Back to login page',
      REMIND_PASSWORD: 'Remind password',
      FORGOT_TEXT: 'Please enter your username'
    })

    .translations('ru', {
      USER_INFO: 'Инфо пользователя',
      UPDATE_USER_INFO: 'Обновить инфо пользвателя',
      USERNAME: 'Имя пользователя',
      PASSWORD: 'Пароль',
      EMAIL_ADDRESS: 'Адрес электронной почты',
      EMAIL: 'Электронный адрес',
      NAME: 'Имя',
      AGE: 'Возраст',
      SAVE: 'Сохранить',
      SIGNOUT: 'Выйти',
      SIGNIN: 'Войти',
      SIGNIN_TEXT: 'Войдите, пожалуйста',
      USERNAME_ERROR_REQUIRED: 'Необходимо имя пользователя',
      PASSWORD_ERROR_REQUIRED: 'Необходим пароль.',
      EMAIL_ERROR: 'Введите существующий адрес почты.',
      NAME_ERROR: 'Имя может содержать только английские символы (одно или два слова, каждое не меньше 3 символов).',
      AGE_ERROR: 'Возраст должен быть указан от 18 до 65.',
      FORGOT_PASSWORD: 'Забыли пароль?',
      BACK_TO_LOGIN: 'Вернуться на логин страницу',
      REMIND_PASSWORD: 'Напомнить пароль',
      FORGOT_TEXT: 'Введите, пожолуйста, имя пользователя'
    });
    
    $translateProvider.preferredLanguage('en');
  }
]);