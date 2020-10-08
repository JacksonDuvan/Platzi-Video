import React from 'react'
import {View, Text, Image, FlatList} from 'react-native'
import { Empty } from '../components/empty'
import { VerticalSeparator } from '../components/vertical-separator'
import { Category } from '../components/category'
import { CategoryListLayout } from '../components/category-list-layout'
import { useSelector, useDispatch } from 'react-redux'


export const CategoriesList = () => {

    const category = useSelector(store => store.category)

    const keyExtractor = item => item.id.toString()
    const renderEmpty = () => <Empty text="No hay sugerencias ☹"/>
    const ItemSeparator = () => <VerticalSeparator horizontal/>
    const renderItem = ({item}) => <Category {...item} />

    return (
        <CategoryListLayout
            title="Categorias" 
        >
            <FlatList
                horizontal 
                keyExtractor={keyExtractor}
                data={category}
                ListEmptyComponent={renderEmpty}
                ItemSeparatorComponent={ItemSeparator}
                renderItem={renderItem}
            />
        </CategoryListLayout>
    )
}