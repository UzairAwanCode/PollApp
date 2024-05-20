import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import {addPollStyles} from '../all-screen-styles/AddPollScreen';
import OptionItem from '../components/OptionItem';
import CustomButton from '../components/CustomButton';

const AddPoll = () => {
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState([
    {value: '', key: 0},
    {value: '', key: 1},
  ]);

  const editOptions = (item, indx, txt)=>{
    let tempOption = options
    tempOption.map((item,index)=>{
      if(indx==index){
        item.value = txt
      }
    })

    let temp = []
    tempOption.map((item)=>{
      temp.push(item)
    })
    setOptions(temp)
  }

  const addOption = ()=>{
    let tempOptions = options
    tempOptions.push({value:'', key: options.length})
    let temp = []
    tempOptions.map((item)=>{
      temp.push(item)
    })
    setOptions(temp)
  }
  return (
    <View style={addPollStyles.container}>
      <View style={addPollStyles.cationArea}>
        <TextInput
          placeholder="Enter your question here...."
          value={question}
          onChangeText={setQuestion}
          multiline
        />
      </View>
      {options.map((item, index) => {
        return <OptionItem
          item={item}
          onChangeText={txt => {
            console.log(txt);
            editOptions(item,index,txt)      
          }}
        />;
      })}
      <Text style={addPollStyles.addOptionBtn} onPress={addOption}>Add More</Text>
      <CustomButton title={'Post Poll'} onClick={()=>{}}/>
    </View>
  );
};

export default AddPoll;
