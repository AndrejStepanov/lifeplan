export default {
	dataIterator: {
	  rowsPerPageText: 'Записей на странице:',
	  rowsPerPageAll: 'Все',
	  pageText: '{0}-{1} из {2}',
	  noResultsText: 'Не найдено подходящих записей',
	  nextPage: 'Следующая страница',
	  prevPage: 'Предыдущая страница'
	},
	dataTable: {
	  rowsPerPageText: 'Строк на странице:'
	},
	noDataText: 'Отсутствуют данные',
	texts:{
		//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
		main:{
			systems:{
				objects:{	name:'Объекты',	title:'АРМы работы с объектами системы',	},
			},
			links:{
				types:{
					ARM:'АРМ'
				},
				navigation:{name:'Навигация',	title:'Навигация по системе',	}, 
				mainPage:{name:'Личный кабинет',	title:'Личный кабинет',	}, 
				demandProf:{name:'Востребованные профессии',	title:'Востребованные профессии',	}, 
				topEdu:{name:'Топ ВУЗов в вашем регионе',	title:'Топ ВУЗов в вашем регионе',	}, 
				topProf:{name:'Топ специальностей',	title:'Топ специальностей',	}, 
				catalogProf:{name:'Каталог профессий',	title:'Каталог профессий',	}, 
				psyhTests:{name:'Психологические тесты',	title:'Психологические тесты',	}, 
				astrologForecast:{name:'Астрологический прогноз',	title:'Астрологический прогноз',	}, 
				actualOffers:{name:'Актуальные предложения',	title:'Актуальные предложения',	}, 
				serch:{name:'Поиск',	title:'Поиск',	}, 				
			},
		},
		//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
		userPage:{
			links:{
				aboutMe:'О себе',
				whereStudy:'Учеба',
				howEge:'ЕГЭ',
				wantStady:'Пожелания',
			},
		},
		//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
		modals:{
			auth:		{	title:'Авторизация',},
			treeAdd:	{	title:'Параметры объекта',},
			valSelect:	{	title:'Выбор значения',},
			traceShow:	{	title:'Трассировка',},
		},
		//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
		simple:{
			actions:{
				add:'Добавить',
				search:'Поиск',
				close:'Закрыть',
				save:'Сохранить',
				cancel:'Отмена',
				accept:'Принять',
				auth:'Авторизоваться',
				authEnd:'Завершить сеанс',
				registration:'Зарегистрироваться',
				chacngePass:'Изменить пароль',
				logOut:'Выйти',
				logIn:'Войти',
			},
			labels:{
				filter:'Фильтр',
				loading:'Загрузка...',
				guest:'Гость',
				auth:'Авторизация',
				registration:'Регистрация',
				os:{name:'FF - Конструктор форм', year:'2018'},
				searchInFields:'Искать по полям',
				personalAccount:'Личный кабинет',
			},
			msgs:{
				valMoreOrEq:'Значение должно быть не меньше {0}!',
				valLessOrEq:'Количество символов не должно превышать {0}!',				
				fieldIsNecessary:'Поле обязательное!',				
				fieldMustUsed:'Поле должно быть использовано!',				
				authNeed:'Необходимо авторизоваться!',				
				defTextMes:'Текст сообщения',				
			},
		},
		//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
		errors:{
			withOpenDialog: 	{	title:'Ошибка при открытии окна',					text:'Запрашиваемое окно не найдено!',	},
			withAddNestElem: 	{	title:'Ошибка при добавлении элемента',				text:'Для добавления вложенного элемента, необходимо выбрать родительский элемент!',},
			incorrectValue: 	{	title:'Некорректное значение',						text:'Указано некорректное значение!',},
			notFullValue: 		{	title:'Ошибка при указании данных',					text:'Перед сохранением, укажите данные полностью!',},
			saveNoDate: 		{	title:'Ошибка при указании данных',					text:'Перед сохранением, укажите дату!'},
			traceNotFound: 		{	title:'Ошибка отображения трассировки',				text:'Трассировка не найдена!',},
			noLogOut: 			{	title:'Ошибка при завершении сеанса',				text:'Завершить сеанс не удалось!',},
			noSendAddress: 		{	title:'Ошибка отправки данных',						text:'Неуказанн адрес для отправки!',},
			requestRefused:		{	title:'Ошибка отправки данных', 					text:'Отправленные данные были отвергнуты!',},
			requestFaild:		{	title:'Ошибка отправки данных', 					text:'Отправить данные не удалось!',},
			noDialogOpen:		{	title:'Ошибка при открытии окна',					text:'Идентификатор запрашиваемого окна не найден!',},
			noDialogInitId:		{	title:'Ошибка инициализации окна', 					text:'Не указан идентификатор окна',},
			withLogIn:			{	title:'Ошибка авторизации', 						text:'Указаны не корректные данные!',},
			withRegistration:	{	title:'Ошибка регистрации', 						text:'Указаны не корректные данные!',},
			withMailFormat:		{	title:'Ошибка в электронном адресе', 				text:'Некорректный формат адреса!',},
			withPasswordLen:	{	title:'Ошибка в длине пароля', 						text:'Длина пароля минимум 6 символов!',},
			withPasswordConf:	{	title:'Ошибка в подтверждении пароля', 				text:'Введенные пароли должны совпадать!',},
			onlyLetters:		{	title:'Допускаются только буквы', 					text:'Допускаются только буквы!',},
		},
		msgs:{
			loginSucsess: 		{	title:'Авторизация',								text:'Выполнен вход под пользователем {0}!',},
			logoutSucsess: 		{	title:'Авторизация',								text:'Пользователь завершил свой сеанс!',},
			saveDoing: 			{	title:'Сохранение данных', 							text:'Данные успешно сохранены!',},
		},
		mainPage:{
			logoTxt1:'ИНТЕЛЛЕКТУАЛЬНАЯ СИСТЕМА',
			logoTxt2:'ПОДБОРА ПРОФЕССИИ ДЛЯ ВАШЕГО РЕБЕНКА',
            headerTxt:'Лучший путь чтобы найти свою профессию',
            headerTxt2:'Самая продвинутая система интелектуального поиска',
            dopI1:'security',
            dopH1:'Блокчейн технология',
            dopT1:'Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.',
            dopI2:'blur_on',
            dopH2:'Многокритериальный поиск',
            dopT2:'Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.',
            dopI3:'face',
            dopH3:'Персональная настройка',
            dopT3:'Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.',
            header2Txt:'Интеллектуальная система поиска ВУЗов',
            header2Txt2:'Персональный поиск с многокритериальной оценкой. Начни пользоваться сегодня',
			buttonTxt2:'Начать поиск ВУЗа',
            aboutProjectH:'О проекте',
            aboutProject:'Наш проект предназначен для облегчения поиска ВУЗа для ребёнка. Интеллектуальная система поиска учитывает множество факторов позволяющая сделать правильный выбор и найти свою профессию в жизни.',
            contacts:'Контакты',
            contacts2:'Если у Вас возникли вопросы Вы можете связаться с нами, будем рады Вам помочь',
            phone:'8 800 350-5354',
            email:'info@konsom.ru',
		},
		footerPage:{
			links:{
				l1:'ВОСТРЕБОВАННЫЕ ПРОФЕССИИ',
				l2:'ТОП ВУЗОВ В ВАШЕМ РЕГИОНЕ',
				l3:'ТОП СПЕЦИАЛЬНОСТЕЙ',
				l4:'КАТАЛОГ ПРОФЕССИЙ',
			},
            footer:'© 1995-2018 Консом групп', //Интеллектуальная система подбора профессии для Вашего ребенка ©2019
		},
		
		//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
	},
}
  