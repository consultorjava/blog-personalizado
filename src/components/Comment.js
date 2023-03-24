
function Comment({ name, email,body }){
    
    return(
        <div >
                <div class="card mb-3 border-primary">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item "><b>Nome:</b> {name}</li>
                        <li class="list-group-item "><b>E-mail:</b> {email}</li>
                    </ul>
                    <div class="card-footer ">
                        <b>Comentários: </b>{body}
                    </div>
                </div>
                
        </div>
        
    )
}

export default Comment;