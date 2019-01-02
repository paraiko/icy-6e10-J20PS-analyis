// Click on the button
// to edit in a frame.
importClass(Packages.icy.type.point.Point5D)
importClass(Packages.icy.main.Icy)
importClass(Packages.icy.sequence.SequenceUtil)
 
// this script takes a sequence as input, crop it with a ROI,
// and then copy the original ROI and put it at (0,0) location.
// remark: some null-tests are not performed like checking if a sequence exists, if it has ROIs...
// I did not put them to create a light script, easy to read
 
sequence = input0;
 
// define the ROI for the crop
roiToUse = null;

    // take the 1st ROI
roiToUse = sequence.getROIs().get( input1 );
 
// test is a ROI hab been found.
if ( roiToUse == null ) throw "CropScript: At least 1 ROI is needed for this operation.";
 
// crop the sequence.
croppedSequence = SequenceUtil.getSubSequence( sequence, roiToUse );
 
// display the sequence
Icy.getMainInterface().addSequence( croppedSequence );
 
// get a copy of the ROI
roiCopy = roiToUse.getCopy();
 
if ( roiCopy.canSetPosition() ) // check if the ROI manage the setPosition method
{
    //Set the new 5d position
    roiCopy.setPosition5D( new Point5D.Double( 0 ,0 ,0 ,0 ,0 ) );
}
 
// add the final ROI to the cropped sequence
croppedSequence.addROI( roiCopy, false );

output0 = croppedSequence;

