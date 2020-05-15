let baseURL;

switch(process.env.NODE_ENV){
    case 'development':
        baseURL = 'http://dev-mall-/api'
        break;
    case 'test':
        baseURL = 'http://test-mall-/api'
        break;
    case 'production':
        baseURL = 'http://prod-mall-/api'
        break;
    default:
        baseURL = 'http://dev-mall-/api'
        break;
}