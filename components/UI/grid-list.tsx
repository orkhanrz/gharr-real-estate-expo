import React from "react";
import { FlatList, StyleProp, View, ViewStyle } from "react-native";

interface GridListProps<T> {
  data: T[];
  columns?: number;
  gap?: number;
  scrollEnabled?: boolean;
  direction?: "vertical" | "horizontal";
  renderItem: (item: T, index: number) => React.ReactNode;
  contentContainerStyle?: StyleProp<ViewStyle>;
  keyExtractor: (item: T, index: number) => string;
}

export function GridList<T>({
  data,
  columns = 1,
  gap = 0,
  scrollEnabled = false,
  direction,
  contentContainerStyle,
  renderItem,
  keyExtractor
}: GridListProps<T>) {
  return (
    <FlatList
      data={data}
      numColumns={columns}
      scrollEnabled={scrollEnabled}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      keyExtractor={keyExtractor}
      horizontal={direction == "horizontal"}
      contentContainerStyle={[contentContainerStyle, { rowGap: gap }]}
      columnWrapperStyle={columns > 1 ? { gap } : undefined}
      renderItem={({ item, index }) => (
        <View style={{ flex: 1 }}>{renderItem(item, index)}</View>
      )}
    />
  );
}
