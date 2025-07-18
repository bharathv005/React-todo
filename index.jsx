.to-do-list{
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    margin-top: 100px;
}

h1{
    font-size: 2em;
}
button{
    font-size: 0.6 rem;
    font-weight: bold;
    padding: 10px 10px;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.5s ease;
    margin-left: 0.8px;
}

.add-button{
    background-color: green;

}
.add-button:hover{
    background-color: rgb(39, 151, 39);
}

.delete-button{
    background-color: red;

}
.delete-button:hover{
    background-color: rgb(215, 46, 46);
}

.move-button{
    background-color: rgb(64, 216, 246);
}

input[type="text"]{
    font-size: 1.2rem;
    padding:10px;
    border: 2px solid hsl(0,0%,80%,0.5);
    border-radius: 5px;
    color: hsl(0,0%,0%,0.5);
}

ol{
    padding: 0;
}

li{
    font-size: 1rem;
    font-weight: bold;
    padding: 15px;
    background-color: white;
    margin-bottom: 10px;
    border: 3px solid hsl(0,0%,85%,0.75);
    border-radius: 5px;
    display: flex;
    align-items: center;
}

.text{
    flex: 1;
}

.delete-button,.move-button{
    padding: 8px 12px;
    font-size: 1.2rem;
    margin-left: 5px;
}
