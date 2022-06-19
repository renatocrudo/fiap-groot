import Keycloak from "keycloak-js";

// iniciando as configurações
// podemos utilizar pelo arquivo na pasta public ou pelo variavel ambiente como abaixo

//@ts-ignore
const keycloakConfig = JSON.parse(process.env.REACT_APP_KEYCLOAK_JSON);

export const keycloak = Keycloak({
    url: keycloakConfig['auth-server-url'],
    realm: keycloakConfig['realm'],
    clientId: keycloakConfig['resource']
});

//login-required | check-sso (aqui ele faz silencioso ou seja vai solicitar login em lugares especificos)
export const keycloakProviderInitConfig: Keycloak.KeycloakInitOptions  = {
    onLoad: "check-sso"
}

