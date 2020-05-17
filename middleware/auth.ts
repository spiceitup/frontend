interface Input {store: any; error: any}

export function hasAuth({store, error}: Input): void{
  if (!store.state.authUser){
    error({
      message: 'You are not connected',
      statusCode: 403
    })    
  }
}