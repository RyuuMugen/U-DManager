"use strict";(self.webpackChunkdevice_management=self.webpackChunkdevice_management||[]).push([[5906],{31403:e=>{e.exports=JSON.parse('{"attribute.boolean":"Booleano","attribute.boolean.description":"Sim ou n\xE3o, 1 ou 0, verdadeiro ou falso","attribute.component":"Componente","attribute.component.description":"Grupo de campos que voc\xEA pode repetir ou reutilizar","attribute.date":"Data","attribute.date.description":"Seleciona datas com horas, minutos e segundos","attribute.datetime":"Data e hora","attribute.dynamiczone":"Zona din\xE2mica","attribute.dynamiczone.description":"Escolha um componente dinamicamente quando estiver editando um conte\xFAdo","attribute.email":"E-mail","attribute.email.description":"Campo de email com valida\xE7\xE3o de formato","attribute.enumeration":"Enumera\xE7\xE3o","attribute.enumeration.description":"Lista de valores, escolha um","attribute.json":"JSON","attribute.json.description":"Dados no formato de JSON","attribute.media":"M\xEDdia","attribute.media.description":"Arquivos como imagens, v\xEDdeos, etc","attribute.null":" ","attribute.number":"N\xFAmero","attribute.number.description":"N\xFAmeros (inteiro, flutuante, decimal)","attribute.password":"Senha","attribute.password.description":"Campo de senha com criptografia","attribute.relation":"Rela\xE7\xE3o","attribute.relation.description":"Refere-se a um Tipo de Cole\xE7\xE3o","attribute.richtext":"Texto avan\xE7ado","attribute.richtext.description":"Um editor de texto avan\xE7ado com op\xE7\xF5es de formata\xE7\xE3o","attribute.text":"Texto","attribute.text.description":"Texto curto ou longo como t\xEDtulo ou descri\xE7\xE3o","attribute.time":"Time","attribute.timestamp":"Timestamp","attribute.uid":"UID","attribute.uid.description":"Identificador \xFAnico","button.attributes.add.another":"Adicionar outro campo","button.component.add":"Adicionar um componente","button.component.create":"Criar novo componente","button.model.create":"Criar novo tipo de cole\xE7\xE3o","button.single-types.create":"Criar novo tipo \xFAnico","component.repeatable":"(repet\xEDvel)","components.SelectComponents.displayed-value":"{number, plural, =0 {# componentes} one {# componente} other {# componentes}} selecionados","components.componentSelect.no-component-available":"Voc\xEA j\xE1 adicionou todos os seus componentes","components.componentSelect.no-component-available.with-search":"N\xE3o h\xE1 nenhum componente que corresponda \xE0 sua pesquisa","components.componentSelect.value-component":"{number} componente selecionado (digite para pesquisar por um componente)","components.componentSelect.value-components":"{number} componentes selecionados","configurations":"Configura\xE7\xF5es","contentType.apiId-plural.description":"ID de API pluralizado","contentType.apiId-plural.label":"ID da API (plural)","contentType.apiId-singular.description":"O UID \xE9 usado para gerar as rotas de API e tabelas/cole\xE7\xF5es de bancos de dados","contentType.apiId-singular.label":"ID da API (Singular)","contentType.collectionName.description":"\xDAtil quando o nome do seu Tipo de Conte\xFAdo e o nome da sua tabela diferem","contentType.collectionName.label":"Nome da cole\xE7\xE3o","contentType.displayName.label":"Mostrar nome","contentType.draftAndPublish.description":"Escreva uma vers\xE3o de rascunho de cada entrada antes de public\xE1-la","contentType.draftAndPublish.label":"Sistema de rascunho/publica\xE7\xE3o","contentType.kind.change.warning":"Voc\xEA acabou de alterar o tipo de um tipo de conte\xFAdo: a API ser\xE1 redefinida (rotas, controladores e servi\xE7os ser\xE3o substitu\xEDdos).","error.attributeName.reserved-name":"Este nome n\xE3o pode ser usado em seu tipo de conte\xFAdo, pois pode quebrar outras funcionalidades","error.contentType.pluralName-used":"Este valor n\xE3o pode ser igual ao singular","error.contentType.singularName-used":"Este valor n\xE3o pode ser igual ao plural","error.contentTypeName.reserved-name":"Este nome n\xE3o pode ser usado em seu projeto, pois pode quebrar outras funcionalidades","error.validation.enum-duplicate":"Valores duplicados n\xE3o s\xE3o permitidos (somente os caracteres alfanum\xE9ricos s\xE3o considerados).","error.validation.enum-empty-string":"Strings vazias n\xE3o s\xE3o permitidas","error.validation.enum-regex":"Pelo menos um valor \xE9 inv\xE1lido. Os valores devem ter pelo menos um caractere alfab\xE9tico antes da primeira ocorr\xEAncia de um n\xFAmero.","error.validation.minSupMax":"N\xE3o pode ser superior","error.validation.positive":"Valor deve ser positivo","error.validation.regex":"O padr\xE3o Regex \xE9 inv\xE1lido","error.validation.relation.targetAttribute-taken":"Este atributo j\xE1 est\xE1 sendo usado","form.attribute.component.option.add":"Adicionar componente","form.attribute.component.option.create":"Criar novo componente","form.attribute.component.option.create.description":"Um componente \xE9 compartilhado entre tipos e componentes, ele estar\xE1 dispon\xEDvel e acess\xEDvel em qualquer lugar.","form.attribute.component.option.repeatable":"Componente repet\xEDvel","form.attribute.component.option.repeatable.description":"Melhor para v\xE1rias inst\xE2ncias (array) de ingredientes, meta tags, etc.","form.attribute.component.option.reuse-existing":"Reutilizar componente existente","form.attribute.component.option.reuse-existing.description":"Reutilize um componente j\xE1 criado para manter seus dados consistentes em todos os tipos de conte\xFAdo.","form.attribute.component.option.single":"Componente \xFAnico","form.attribute.component.option.single.description":"Melhor para agrupar campos como endere\xE7o completo, informa\xE7\xF5es principais, etc...","form.attribute.item.customColumnName":"Nomes de coluna personalizados","form.attribute.item.customColumnName.description":"Isso \xE9 \xFAtil para renomear os nomes das colunas do banco de dados em um formato mais abrangente para as respostas da API","form.attribute.item.date.type.date":"data (ex: 01/01/{currentYear})","form.attribute.item.date.type.datetime":"data e hora (ex: 01/01/{currentYear} 00:00 AM)","form.attribute.item.date.type.time":"hora (ex: 00:00 AM)","form.attribute.item.defineRelation.fieldName":"Nome do campo","form.attribute.item.enumeration.graphql":"Substitui\xE7\xE3o de nome para GraphQL","form.attribute.item.enumeration.graphql.description":"Permite que voc\xEA substitua o nome padr\xE3o gerado para GraphQL","form.attribute.item.enumeration.placeholder":"Ex:\\nmanh\xE3\\ntarde\\nnoite","form.attribute.item.enumeration.rules":"Valores (uma linha por valor)","form.attribute.item.maximum":"Valor m\xE1ximo","form.attribute.item.maximumLength":"Tamanho m\xE1ximo","form.attribute.item.minimum":"Valor m\xEDnimo","form.attribute.item.minimumLength":"Tamanho m\xEDnimo","form.attribute.item.number.type":"Formato de n\xFAmero","form.attribute.item.number.type.biginteger":"inteiro grande (ex: 123456789)","form.attribute.item.number.type.decimal":"decimal (ex: 2.22)","form.attribute.item.number.type.float":"float (ex: 3.33333333)","form.attribute.item.number.type.integer":"inteiro (ex: 10)","form.attribute.item.privateField":"Campo privado","form.attribute.item.privateField.description":"Este campo n\xE3o aparecer\xE1 na resposta da API","form.attribute.item.requiredField":"Campo obrigat\xF3rio","form.attribute.item.requiredField.description":"Voc\xEA n\xE3o poder\xE1 criar uma entrada se este campo estiver vazio","form.attribute.item.text.regex":"Padr\xE3o Regex","form.attribute.item.text.regex.description":"O texto da express\xE3o regular","form.attribute.item.uniqueField":"Campo \xFAnico","form.attribute.item.uniqueField.description":"Voc\xEA n\xE3o poder\xE1 criar uma entrada se houver uma entrada existente com conte\xFAdo id\xEAntico","form.attribute.media.allowed-types":"Selecione os tipos de m\xEDdia permitidos","form.attribute.media.allowed-types.option-files":"Arquivos","form.attribute.media.allowed-types.option-images":"Imagens","form.attribute.media.allowed-types.option-videos":"V\xEDdeos","form.attribute.media.option.multiple":"M\xFAltiplos","form.attribute.media.option.multiple.description":"Melhor para sliders, carross\xE9is ou download de v\xE1rios arquivos","form.attribute.media.option.single":"\xDAnico","form.attribute.media.option.single.description":"Melhor para avatar, foto de perfil ou capa","form.attribute.settings.default":"Valor Padr\xE3o","form.attribute.text.option.long-text":"Texto longo","form.attribute.text.option.long-text.description":"Melhor para descri\xE7\xF5es, biografia. A pesquisa exata est\xE1 desativada.","form.attribute.text.option.short-text":"Texto curto","form.attribute.text.option.short-text.description":"Melhor para t\xEDtulos, nomes, links (URL). Tamb\xE9m permite a pesquisa exata no campo.","form.button.add-components-to-dynamiczone":"Adicionar componentes \xE0 zona","form.button.add-field":"Adicionar campo","form.button.add-first-field-to-created-component":"Adicionar primeiro campo ao componente criado","form.button.add.field.to.collectionType":"Adicionar outro campo a este tipo de cole\xE7\xE3o","form.button.add.field.to.component":"Adicionar outro campo a este componente","form.button.add.field.to.contentType":"Adicionar outro campo a este tipo de conte\xFAdo","form.button.add.field.to.singleType":"Adicionar outro campo a este \xFAnico tipo","form.button.cancel":"Cancelar","form.button.collection-type.description":"Melhor para v\xE1rias inst\xE2ncias, como artigos, produtos, coment\xE1rios etc.","form.button.collection-type.name":"Tipo de Cole\xE7\xE3o","form.button.configure-component":"Configurar componente","form.button.configure-view":"Configurar visualiza\xE7\xE3o","form.button.select-component":"Selecionar componente","form.button.single-type.description":"Melhor para inst\xE2ncia \xFAnica, como sobre n\xF3s, p\xE1gina inicial etc.","form.button.single-type.name":"Tipo \xDAnico","from":"de","listView.headerLayout.description":"Crie a arquitetura de dados do seu conte\xFAdo","menu.section.components.name":"Componentes","menu.section.models.name":"Tipos de Cole\xE7\xE3o","menu.section.single-types.name":"Tipos \xDAnicos","modalForm.attribute.form.base.name.description":"Nenhum espa\xE7o \xE9 permitido para o nome do atributo","modalForm.attribute.form.base.name.placeholder":"por exemplo. Slug, URL de SEO, URL can\xF4nica","modalForm.attribute.target-field":"Campo anexado","modalForm.attributes.select-component":"Selecione um componente","modalForm.attributes.select-components":"Selecione os componentes","modalForm.collectionType.header-create":"Criar modelo","modalForm.component.header-create":"Criar componente","modalForm.components.create-component.category.label":"Selecione uma categoria ou insira um nome para criar uma nova","modalForm.components.icon.label":"\xCDcone","modalForm.editCategory.base.name.description":"N\xE3o \xE9 permitido espa\xE7o para o nome da categoria","modalForm.header-edit":"Editar {name}","modalForm.header.categories":"Categorias","modalForm.singleType.header-create":"Criar tipo \xFAnico","modalForm.sub-header.addComponentToDynamicZone":"Adicionar novo componente \xE0 zona din\xE2mica","modalForm.sub-header.attribute.create":"Adicionar novo campo {type}","modalForm.sub-header.attribute.create.step":"Adicionar novo componente ({step}/2)","modalForm.sub-header.attribute.edit":"Editar {name}","modalForm.sub-header.chooseAttribute.collectionType":"Selecione um campo para seu tipo de cole\xE7\xE3o","modalForm.sub-header.chooseAttribute.component":"Selecione um campo para seu componente","modalForm.sub-header.chooseAttribute.singleType":"Selecione um campo para seu tipo \xFAnico","modelPage.attribute.relation-polymorphic":"Rela\xE7\xE3o (polim\xF3rfica)","modelPage.attribute.relationWith":"Rela\xE7\xE3o com","notification.error.dynamiczone-min.validation":"Pelo menos um componente \xE9 necess\xE1rio em uma zona din\xE2mica para poder salvar um tipo de conte\xFAdo","notification.info.autoreaload-disable":"O recurso autoReload \xE9 necess\xE1rio para usar este plugin. Inicie seu servidor com `strapi develop`","notification.info.creating.notSaved":"Por favor, salve seu trabalho antes de criar um novo tipo de cole\xE7\xE3o ou componente","plugin.description.long":"Modele a estrutura de dados da sua API. Crie novos campos e rela\xE7\xF5es em apenas um minuto. Os arquivos s\xE3o criados e atualizados automaticamente em seu projeto.","plugin.description.short":"Modele a estrutura de dados da sua API.","plugin.name":"Criador de tipo de conte\xFAdo","popUpForm.navContainer.advanced":"Configura\xE7\xF5es avan\xE7adas","popUpForm.navContainer.base":"Configura\xE7\xF5es b\xE1sicas","popUpWarning.bodyMessage.cancel-modifications":"Tem certeza de que deseja cancelar suas modifica\xE7\xF5es?","popUpWarning.bodyMessage.cancel-modifications.with-components":"Tem certeza de que deseja cancelar suas modifica\xE7\xF5es? Alguns componentes foram criados ou modificados...","popUpWarning.bodyMessage.category.delete":"Tem certeza de que deseja excluir esta categoria? Todos os componentes tamb\xE9m ser\xE3o exclu\xEDdos.","popUpWarning.bodyMessage.component.delete":"Tem certeza de que deseja excluir este componente?","popUpWarning.bodyMessage.contentType.delete":"Tem certeza de que deseja excluir este tipo de cole\xE7\xE3o?","popUpWarning.draft-publish.button.confirm":"Sim, desabilitar ","popUpWarning.draft-publish.message":"Se voc\xEA desativar o sistema Rascunho/Publicar, seus rascunhos ser\xE3o exclu\xEDdos.","popUpWarning.draft-publish.second-message":"Tem certeza de que deseja desativ\xE1-lo?","prompt.unsaved":"Voc\xEA tem certeza de que quer sair? Todas as suas modifica\xE7\xF5es ser\xE3o perdidas.","relation.attributeName.placeholder":"Ex: autor, categoria, tag","relation.manyToMany":"tem e pertence a muitos","relation.manyToOne":"tem e pertence a um","relation.manyWay":"tem e pertence a muitos","relation.oneToMany":"pertence a muitos","relation.oneToOne":"tem e pertence a um","relation.oneWay":"pertence a um","table.button.no-fields":"Adicionar novo campo","table.content.create-first-content-type":"Crie seu primeiro tipo de cole\xE7\xE3o","table.content.no-fields.collection-type":"Adicione seu primeiro campo a este Tipo de Cole\xE7\xE3o","table.content.no-fields.component":"Adicione seu primeiro campo a este Componente"}')}}]);