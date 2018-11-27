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
				objWork:{name:'Работа с объектами',	title:'Работы с деревом объектов!',	},
				obgView:{name:'Просмотр объектов',	title:'Просмотр созданных в системе объектов!',	},
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
				registration:'Зарегистрироваться',
				chacngePass:'Изменить пароль',
				logOut:'Выйти',
			},
			labels:{
				filter:'Фильтр',
				loading:'Загрузка...',
				guest:'Гость',
				os:{name:'FF - Конструктор форм', year:'2018'},
				searchInFields:'Искать по полям',
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
		},
		msgs:{
			loginSucsess: 		{	title:'Авторизация',								text:'Выполнен вход под пользователем {0}!',},
			logoutSucsess: 		{	title:'Авторизация',								text:'Пользователь завершил свой сеанс!',},
		},
		
		//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
	},
}
  