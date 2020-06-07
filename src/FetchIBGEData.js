import React from "react";

export default class FetchIBGEData extends React.Component {
  state = {
    loading: true,
    names: null
  };

  async componentDidMount() {
      const url = "https://servicodados.ibge.gov.br/api/v2/censos/nomes/Eduardo";
      const response = await fetch(url);
      const data = await response.json();
      this.setState({ names: data[0], loading: false });
      console.log(data[0]);
    }

    render() {
      if (this.state.loading) {
        return <div>Carregando...</div>;
      }

      if (!this.state.names) {
        return <div>Ops, parece que não encontramos o nome, tente outro nome :)</div>;
      }

      return (
        <div>
          <div>{this.state.names.nome}</div>
          <div>{this.state.names.localidade}</div>
        </div>
      );
    }


}
