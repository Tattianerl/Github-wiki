import styled from "styled-components";

export const ItemRepoContainer = styled.div`
    width: 80%;


    h3{
        font-size: 32px;
        color: #FAFAFA;
    }

    p{
        font-size: 16px;
        color: #FAFAFA60;
        margin-bottom: 20px;
        
    }

    .link {
    text-decoration: none;
    color: blue;
    }

    .link:hover {
    text-decoration: underline; 
    }

    .remover {
        background: #2D333B;
        width: 89px;
        height:  24px;
        color: #FF0000;
        margin: 20px 0;
        border-radius: 12px;
        border: 1px solid #999999

    }

    .remover:hover {
        background-color: #FAFAFA40;
        color: darkred;
    
    }

    hr{
        margin: 20px 0;
        color: #FAFAFA60;
    }

`