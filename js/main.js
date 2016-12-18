new Vue({
	el:"#main",
	data:{
		host:'https://mahasiswa.top/',
		bookList:[],
		showDetail:false,
		showMain:true,
		transmit:"Loading",
		showTransmit:false,
		detailBook:[],
		showLogin:false,
		showRegister:false,
	},
	beforeCompile:function(){
		this.getBookList();
	},
	methods:{
		getBookList:function(){
			this.showTransmit = true;
			this.showMain = false;
			this.showDetail = false;
			this.showLogin = false;
			this.showRegister = false;
			this.$http.get(this.host+'user/get_book_list').then((response)=>{
				this.bookList = response.json();
				this.showTransmit = false;
				this.showMain = true;
			});
		},
		getDetailBook:function(e){
			this.showTransmit = true;
			this.showMain = false;
			this.$http.get(this.host+'user/get_detail_book/'+e).then((response)=>{
				this.detailBook = response.json();
				// console.log(data.data_token[0].title_book);
				this.showDetail = true;
				this.showTransmit = false;
			});
		},
		showLoginForm:function(){
			this.showLogin = true;
			this.showRegister = false;
			this.showMain = false;
		},
		showRegisterForm:function(){
			this.showRegister = true;
			this.showLogin = false;
			this.showMain = false;
		}

	}


});