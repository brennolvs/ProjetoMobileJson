import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView } from 'react-native';

export default function App() {
  const [cep, setCep] = useState('');
  const [logradouro, setLogradouro] = useState('');
  const [complemento, setComplemento] = useState('');
  const [bairro, setBairro] = useState('');
  const [localidade, setLocalidade] = useState('');
  const [uf, setUF] = useState('');
  const [ibge, setIBGE] = useState('');
  const [gia, setGIA] = useState('');
  const [ddd, setDDD] = useState('');
  const [siafi, setSIAFI] = useState('');
  const [jsonData, setJsonData] = useState(null);

  const geradorJSON = () => {
    const jsonData = {
      cep: cep,
      complemento: complemento,
      bairro: bairro
    };

    //JSON no console apenas para fins de demonstração.
    console.log(jsonData);

    setJsonData(jsonData);
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>CEP:</Text>
      <TextInput
        placeholder="Digite o CEP"
        value={cep}
        onChangeText={setCep}
        keyboardType="numeric"
      />

      <Text>Logradouro:</Text>
      <TextInput
        placeholder="Digite o logradouro"
        value={logradouro}
        onChangeText={setLogradouro}
      />

      <Text>Complemento:</Text>
      <TextInput
        placeholder="Digite o complemento"
        value={complemento}
        onChangeText={setComplemento}
      />

      <Text>Bairro:</Text>
      <TextInput
        placeholder="Digite o bairro"
        value={bairro}
        onChangeText={setBairro}
      />

      <Text>Localidade:</Text>
      <TextInput
        placeholder="Digite a localidade"
        value={localidade}
        onChangeText={setLocalidade}
      />

      <Text>UF:</Text>
      <TextInput
        placeholder="Digite a UF"
        value={uf}
        onChangeText={setUF}
      />

      <Text>IBGE:</Text>
      <TextInput
        placeholder="Digite o IBGE"
        value={ibge}
        onChangeText={setIBGE}
      />

      <Text>GIA:</Text>
      <TextInput
        placeholder="Digite o GIA"
        value={gia}
        onChangeText={setGIA}
      />

      <Text>DDD:</Text>
      <TextInput
        placeholder="Digite o DDD"
        value={ddd}
        onChangeText={setDDD}
      />

      <Text>SIAFI:</Text>
      <TextInput
        placeholder="Digite o SIAFI"
        value={siafi}
        onChangeText={setSIAFI}
      />

      <Button title="Gerar JSON" onPress={geradorJSON} />

      {jsonData && (
        <View style={{ marginTop: 20 }}>
          <Text>Resultado JSON:</Text>
          <Text>{JSON.stringify(jsonData, null, 2)}</Text>
        </View>
      )}
    </ScrollView>
  );
}
