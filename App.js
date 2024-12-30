
const heading = React.createElement("h1",{id:"heading"},"hello world");
const root = ReactDOM.createRoot(document.getElementById('root'));



const parent = React.createElement('div',{id:'parent'},
       [
        React.createElement('div',{id:'child'},
        [
        React.createElement('h1',{id:''},'i am h1 tag'),
        React.createElement('h1',{id:'s'},'i am h1 tag')
        ]),
        React.createElement('div',{id:'child2'},
            [
            React.createElement('h1',{id:''},'i am h1 tag'),
            React.createElement('h1',{id:'s'},'i am h1 tag')
            ]),

       ]
)


console.log(parent)
root.render(parent)
