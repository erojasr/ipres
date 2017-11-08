<template>
<div>
    <div class="text-center">
      <div class="pagination">
          <ul class="pagination">
            <li><a href="#">←</a></li>
            <li><a href="#" class="hidden-xs">PRESUPUESTO OCTUBRE 2017</a></li>
            <li class="active"><a href="#">PRESUPUESTO NOVIEMBRE 2017</a></li>
            <li><a href="#" class="hidden-xs">PRESUPUESTO DICIEMBRE 2017</a></li>
        	<li><a href="#">→</a></li>
          </ul>
      </div>
     </div>

    <div class="row">
    <div class="col-md-6">
      <div class="row">
        <div class="col-md-4"><strong><span class="glyphicon glyphicon-calendar"></span>  QUINCENA 1</strong></div>
        <div class="col-md-4"><strong>TOTAL:</strong> <span class="label label-danger pull-right" style="font-size:14px;">¢500.000</span></div>
        <div class="col-md-4"><strong>SALDO:</strong> <span class="label label-success pull-right" style="font-size:14px;">¢ {{ totalBalance.first.toLocaleString() }}</span></div>
      </div>
      <hr>
      
      <div class="well">
        <ul class="list-group">
          <li class="list-group-item">
            <div class="form-group row" style="margin-bottom:5px !important;">
              <div class="col-xs-8">
                <input class="form-control" id="article" v-model="articleOne" type="text" placeholder="Agregue Compra">
              </div>
              <div class="col-xs-4">
                <input class="form-control" id="amount" v-model.number="amountOne" type="number" @keyup.enter="addArticleOne" placeholder="Monto">
              </div>
            </div>
          </li>

          <li class="list-group-item clearfix" v-for="(item, index) in filterFortnightFirst">
            <strong><span class="glyphicon glyphicon-shopping-cart"></span>  {{ item.article }} <span class="label label-primary" style="font-size:14px;">¢ {{ item.amount.toLocaleString() }}</span></strong>
            <span class="pull-right">
              <button type="button" class="btn btn-danger btn-xs" @click="deleteArticle(item.id)"><span class="glyphicon glyphicon-remove"></span></button>
            </span>
          </li>
        </ul>
      </div>
    </div>
    <div class="col-md-6">
            <div class="row">
        <div class="col-md-4"><strong><span class="glyphicon glyphicon-calendar"></span>  QUINCENA 2</strong></div>
        <div class="col-md-4"><strong>TOTAL:</strong> <span class="label label-danger pull-right" style="font-size:14px;">¢500.000</span></div>
        <div class="col-md-4"><strong>SALDO:</strong> <span class="label label-success pull-right" style="font-size:14px;">¢ {{ totalBalance.second.toLocaleString() }}</span></div>
      </div>
      <hr>
      <div class="well">
         <ul class="list-group">
          <li class="list-group-item">
            <div class="form-group row" style="margin-bottom:5px !important;">
              <div class="col-xs-8">
                <input class="form-control" id="article" v-model="articleTwo" type="text" placeholder="Agregue Compra">
              </div>
              <div class="col-xs-4">
                <input class="form-control" id="amount" v-model.number="amountTwo" type="number" @keyup.enter="addArticleTwo" placeholder="Monto">
              </div>
            </div>
          </li>

          <li class="list-group-item clearfix" v-for="(item, index) in filterFortnightSecond">
            <strong><span class="glyphicon glyphicon-shopping-cart"></span>  {{ item.article }} <span class="label label-primary" style="font-size:14px;">¢ {{ item.amount.toLocaleString() }}</span></strong>
            <span class="pull-right">
              <button type="button" class="btn btn-danger btn-xs" @click="deleteArticle(item.id)"><span class="glyphicon glyphicon-remove"></span></button>
            </span>
          </li>

        </ul>
      </div>
      </div>
    </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      articleOne: '',
      amountOne: '',
      articleTwo: '',
      amountTwo: '',
      balances : [
        {
          id:1,
          article: 'Carls Junior',
          amount: 5000,
          date: '2017-10-05',
          fortnight: 1,
          done: false
        },
        {
          id:2,
          article: 'Siman Ropa',
          amount: 25000,
          date: '2017-10-05',
          fortnight: 1,
          done: false
        },
        {
          id:3,
          article: 'Wallmart',
          amount: 104000,
          date: '2017-10-05',
          fortnight: 1,
          done: false
        },
        {
          id:4,
          article: 'Universidad',
          amount: 175000,
          date: '2017-10-05',
          fortnight: 2,
          done: false
        },
        {
          id:5,
          article: 'Telefonos',
          amount: 40000,
          date: '2017-10-05',
          fortnight: 2,
          done: false
        },
      ]
    }
  },
  computed: {
    filterFortnightFirst: function () {
      return this.balances.filter(item => {
         return item.fortnight == 1 
      })
    },
    filterFortnightSecond: function () {
      return this.balances.filter(item => {
         return item.fortnight == 2 
      })
    },
    totalBalance: function(){
      let totalFirst = [];
      let totalSecond = [];
      var total = [];
      this.balances.forEach(function (balance){
        if(balance.fortnight == 1)
          totalFirst.push(balance.amount);
        else
          totalSecond.push(balance.amount);
      })
      total['first'] = totalFirst.reduce(function(totalFirst, num){ return totalFirst + num }, 0);
      total['second'] = totalSecond.reduce(function(totalSecond, num){ return totalSecond + num }, 0);;


      return total;
    }
  },
  methods: {
    addArticleOne: function(){
      this.balances.push(
        {
          id:this.balances[this.balances.length - 1].id + 1,
          article: this.articleOne,
          amount: this.amountOne,
          date: '2017-10-05',
          fortnight: 1,
          done: false
        }
      )

      this.articleOne = ''
      this.amountOne = ''
    },
    addArticleTwo: function(){
      this.balances.push(
        {
          id:this.balances[this.balances.length - 1].id + 1,
          article: this.articleTwo,
          amount: this.amountTwo,
          date: '2017-10-05',
          fortnight: 2,
          done: false
        }
      )

      this.articleTwo = ''
      this.amountTwo = ''
    },
    deleteArticle: function(item){
      
      var index = this.balances.map(function(d) { return d['id']; }).indexOf(item);
      console.log(index);
      this.balances.splice(index, 1);
    }

  }
}
</script>

<style>
</style>
